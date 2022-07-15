const Bootcamp = require("../models/Bootcamp")

exports.getAllBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.find()

    res.status(201).json({
      success: true,
      count: bootcamp.length,
      data: bootcamp,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error.message}`,
    })
  }
}

exports.getSingleBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id)

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: "There is no bootcamp with that id",
      })
    }

    res.status(201).json({
      success: true,
      data: bootcamp,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error.message}`,
    })
  }
}

exports.createNewBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.create(req.body)

    res.status(201).json({
      success: true,
      data: bootcamp,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error.message}`,
    })
  }
}

exports.updateBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    })

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: "There is no bootcamp with that id",
      })
    }

    res.status(200).json({
      success: true,
      data: bootcamp,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error.message}`,
    })
  }
}

exports.deleteBootcamp = async (req, res) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id)

    if (!bootcamp) {
      return res.status(404).json({
        success: false,
        message: "There is no bootcamp with that id",
      })
    }

    res.status(200).json({
      success: true,
      message: "bootcamp deleted",
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      message: `${error.message}`,
    })
  }
}
