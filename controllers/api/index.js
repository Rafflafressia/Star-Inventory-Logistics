const router = require("express").Router();
const productRoutes = require("./productRoute");
const categoryRoutes = require("./categoryRoute");
const userRoutes = require("./userRoute");
const addEmployeeRoutes = require("./addEmployeeRoute");


router.use("/add-employee",addEmployeeRoutes)
router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);
router.use("/",userRoutes)

module.exports = router;