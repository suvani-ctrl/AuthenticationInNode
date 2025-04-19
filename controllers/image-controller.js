const Image = require('../models/Image');
const { uploadToCloudinary } = require('../helpers/cloudinaryHelper');
const fs = require('fs');
const cloudinary = require('cloudinary').v2;

// Upload Image Controller
const uploadImageController = async (req, res) => {
  try {
    // Check if the file is present in the request
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: 'File is required. Please upload an image',
      });
    }

    // Upload the file to Cloudinary
    const { url, publicId } = await uploadToCloudinary(req.file.path);

    // Create a new image document in the database
    const newlyUploadedImage = new Image({
      url,
      publicId,
      uploadedBy: req.user.userId,
    });

    await newlyUploadedImage.save();

    // Delete the local file after uploading
    fs.unlinkSync(req.file.path);

    // Send the success response
    res.status(201).json({
      success: true,
      message: 'Image uploaded successfully',
      image: newlyUploadedImage,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while uploading the image',
    });
  }
};

// Fetch Images Controller (with Pagination + Sorting)
const fetchImagesController = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const skip = (page - 1) * limit;

    const sortBy = req.query.sortBy || 'createdAt';
    const sortOrder = req.query.sortOrder === 'asc' ? 1 : -1;

    const totalImages = await Image.countDocuments();
    const totalPages = Math.ceil(totalImages / limit);

    const sortObj = {};
    sortObj[sortBy] = sortOrder;

    const images = await Image.find()
      .sort(sortObj)
      .skip(skip)
      .limit(limit);

    res.status(200).json({
      success: true,
      currentPage: page,
      totalPages,
      totalImages,
      data: images,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while fetching images',
    });
  }
};

// Delete Image Controller
const deleteImageController = async (req, res) => {
  try {
    const imageId = req.params.id;
    const userId = req.user.userId;

    const image = await Image.findById(imageId);

    if (!image) {
      return res.status(404).json({
        success: false,
        message: "Image not found!",
      });
    }

    // Check if the current user uploaded this image
    if (image.uploadedBy.toString() !== userId) {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to delete this image because you haven't uploaded it",
      });
    }

    // Delete image from Cloudinary
    await cloudinary.uploader.destroy(image.publicId);

    // Delete image from MongoDB
    await Image.findByIdAndDelete(imageId);

    res.status(200).json({
      success: true,
      message: "Image successfully deleted",
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: 'Something went wrong while deleting the image',
    });
  }
};

module.exports = {
  uploadImageController,
  fetchImagesController,
  deleteImageController,
};
