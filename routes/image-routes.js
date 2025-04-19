const express = require("express");
const router = express.Router();
const authMiddleWare = require("../middleware/auth-middleware");
const adminMiddleWare = require("../middleware/admin-middleware");
const uploadMiddleware = require('../middleware/upload-middleware');
const { uploadImageController, fetchImagesController,deleteImageController } = require('../controllers/image-controller');
// Upload the image

router.post(
  '/upload',
  authMiddleWare,
  adminMiddleWare,
  uploadMiddleware.single('image'),
  uploadImageController
);

router.get('/get', fetchImagesController)
router.delete('/:id',authMiddleWare,adminMiddleWare,deleteImageController)


module.exports = router;

