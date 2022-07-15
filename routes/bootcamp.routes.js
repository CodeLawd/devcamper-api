const express = require("express")
const router = express.Router()
const {
  getAllBootcamp,
  getSingleBootcamp,
  createNewBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamp.controller")

router.route("/").get(getAllBootcamp).post(createNewBootcamp)

router
  .route("/:id")
  .get(getSingleBootcamp)
  .patch(updateBootcamp)
  .delete(deleteBootcamp)

module.exports = router
