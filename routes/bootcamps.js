const express = require("express");

const {
  createBootcamp,
  deleteBootcamp,
  getBootcamp,
  getBootcamps,
  updateBootcamp,
  getBootcampsInRadius,
} = require("../controllers/bootcamps");

//include other ressource routers

const courseRouter = require("./courses");

const router = express.Router();

// Re-route into other resource routers

router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootcampsInRadius);

router.route("/").get(getBootcamps).post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
