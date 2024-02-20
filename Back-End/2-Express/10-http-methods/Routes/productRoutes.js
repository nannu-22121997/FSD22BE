import express from "express";
import {
  getProducts,
  getSingleProduct,
} from "../Controllers/productControllsers/productControllers.js";

const router = express.Router();

// Get all the products
router.get("/", getProducts);

// Get Single product
router.get("/:id", getSingleProduct);

export default router;
