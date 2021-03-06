const ErrorResponse = require("../helpers/errorResponse")
const asyncHandler = require("../middlewares/async")
const Bootcamp = require("../models/Bootcamp")

exports.getAllBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.find()
  res.status(201).json({
    success: true,
    count: bootcamp.length,
    data: bootcamp,
  })
})

exports.getSingleBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findById(req.params.id)

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(201).json({
    success: true,
    data: bootcamp,
  })
})

exports.createNewBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body)

  res.status(201).json({
    success: true,
    data: bootcamp,
  })
})

exports.updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({
    success: true,
    data: bootcamp,
  })
})

exports.deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    )
  }

  res.status(200).json({
    success: true,
    message: "bootcamp deleted",
  })
})
