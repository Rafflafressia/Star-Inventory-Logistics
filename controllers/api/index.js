const router = require("express").Router();
const productRoutes = require("./productRoute");
const categoryRoutes = require("./categoryRoute");
const userRoutes = require("./userRoute");
const employeeRoutes = require("./employeeRoute");

// set up api router
router.use("/employee",employeeRoutes)
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/",userRoutes)

module.exports = router;