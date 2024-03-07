const router = require("express").Router();
const productRoutes = require("./productRoute");
const categoryRoutes = require("./categoryRoute");

router.use("/categories", categoryRoutes);
router.use("/products", productRoutes);

module.exports = router;