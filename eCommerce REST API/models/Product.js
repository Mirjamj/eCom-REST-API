import mongoose from "mongoose";

// Define a schema for a "Product"
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  images: { type: [String], required: true },
},

  // Automatically adds `createdAt` and `updatedAt` timestamps to each product
  { timestamps: true }
);

// Create a Mongoose model called "Product" based on the schema above
const Product = mongoose.model("Product", productSchema);

export default Product;