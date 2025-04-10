// Export function to handle incoming HTTP requests 
export const sendMessage = (req, res) => {
  console.log(req.body);

  // Destructure the values sent in the request body
  const { firstName, lastName, email, message } = req.body

  // Check if any of the required fields are missing, if so send back a 400 status code with an error message
  if (!firstName || !lastName || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  // If all fields are present, send a 200 (OK) response with a success message
  res.status(200).json({ message: 'Message sent successfully' })
}