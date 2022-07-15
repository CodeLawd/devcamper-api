require("dotenv").config()
const express = require("express")
const morgan = require("morgan")
const app = express()

// CONNECTING APP TO DATABASE
require("./config/db.config")

// Import routes
const bootcamps = require("./routes/bootcamp.routes")

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"))
}

// Express json middleware
app.use(express.json())

// Configuring rootes
app.use("/api/v1/bootcamps", bootcamps)

// Setting up our server to listent to assigned PORT
const server = app.listen(process.env.PORT, () =>
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`
  )
)

// GLOBAL CONFIG TO HANDLE ALL UNHANDLED PROMISE REJECTIONS
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`)
  server.close(() => process.exit(1))
})
