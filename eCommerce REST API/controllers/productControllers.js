import mongoose from "mongoose"
import Product from "../models/Product.js"

// GET all products
export const getProducts = async (req, res) => {

  try {
    // Fetch all products from the database
    const products = await Product.find()

    // Send them back in the response with status 200 (OK)
    res.status(200).json(products)

    // If something goes wrong, send a 500 (Server Error)
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch products', error })
  }
}

// GET a single product by ID
export const getProductById = async (req, res) => {

  try {
    // Check if the provided ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(404).json({ message: 'Product not found' })
    }

    // Try to find the product by its ID
    const product = await Product.findById(req.params.id)
    if (!product) return res.status(404).json({ message: 'Product not found' })

    // If found, send it back
    res.status(200).json(product)

    // Handle server/database errors
  } catch (error) {
    res.status(500).json({ message: 'Could not fetch product', error })
  }
}

// CREATE a new product
export const createProduct = async (req, res) => {
  console.log("Received Data:", req.body);
  try {
    // Destructure the product info from the request body
    const { name, price, description, category, images } = req.body

    // Create a new product using the model
    const newProduct = new Product({ name, price, description, category, images })

    // Save it to the database
    await newProduct.save()

    // Send a 201 (Created) response with the new product
    res.status(201).json(newProduct)
  } catch (error) {
    res.status(500).json({ message: 'Could not add product', error })
  }
}

// UPDATE an existing product
export const updateProduct = async (req, res) => {
  try {
    // Find product by ID and update it with the new data from req.body
    const updateProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }) // Return the updated document

    // If the product wasn't found, send 404
    if (!updateProduct) return res.status(404).json({ message: 'Product not found' })

    // Respond with the updated product
    res.status(200).json(updateProduct)
  } catch (error) {
    res.status(500).json({ message: 'Could not update product', error })
  }
}

// DELETE a product
export const deleteProduct = async (req, res) => {
  try {
    // Find the product by ID and delete it
    const deletedProduct = await Product.findByIdAndDelete(req.params.id)

    // If the product wasn't found, respond with 404
    if (!deletedProduct) return res.status(404).json({ message: 'Product not found' })

    // Confirm deletion with a success message
    res.status(200).json({ message: 'Product deleted successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Could not delete product', error })
  }
}