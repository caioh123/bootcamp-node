// @description GET all bootcamps
// @route       GET /api/v1/bootcamps
// @access      Public

exports.getBootcamps = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: "show all bootcamp", hello: req.hello });
};

// @description GET single bootcamps
// @route       GET /api/v1/bootcamps/:id
// @access      Public

exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `get bootcamp ${req.params.id}` });
};

// @description create bootcamp
// @route       POST /api/v1/bootcamps
// @access      Private

exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, message: "create new bootcamp" });
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

exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, message: `delete bootcamp ${req.params.id}` });
};
