const Bootcamp = require("../models/Bootcamp");

// @description GET all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public

exports.getBootcamps = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();

    res.status(200).json({ success: true, data: bootcamps });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @description GET single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public

exports.getBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);

    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @description create bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private

exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);

    res.status(201).json({
      success: true,
      data: bootcamp,
    });
  } catch (err) {
    res.status(400).json({ success: false });
  }
};

// @description update bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private

exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `update bootcamp ${req.params.id}` });
};

// @description delete bootcamp
// @route       PUT /api/v1/bootcamps/:id
// @access      Private

exports.deleteBootcamp = async (req, res, next) => {
  await Bootcamp.deleteOne({ _id: req.params.id });

  res.status(200).json({ success: true });
};
