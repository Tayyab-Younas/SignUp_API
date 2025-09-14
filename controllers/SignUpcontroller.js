import bcrypt from "bcrypt";
import userModel from "../models/SIngUpModel.js";
import generateToken from "../utils/generateToken.js";

const signUpController = async (req, res) => {
  try {
    const { name, email, password, phoneNumber, address, role } = req.body;

    // Check if user with the same email already exists
    const existingUser = await userModel.findOne({ email });

    // Check if user already exists
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User already exists", success: false });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
      profilePhoto: req.file?.path || "default.jpg",
      phoneNumber,
      address,
      role,
    });

    const token = generateToken(newUser._id);

    await newUser.save();
    res.status(201).json({
      message: "User created successfully",
      success: true,
      token,
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        profilePhoto: newUser.profilePhoto,
        phoneNumber: newUser.phoneNumber,
        address: newUser.address,
        role: newUser.role,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message, success: false });
  }
};

export default signUpController;
