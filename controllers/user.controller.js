import { User } from "../models/User.model.js";

export const createUser = async (request, response) => {
  const { name, email, age } = request.body;
  try {
    let existingUser = await User.findOne({ email });
    if (existingUser) {
      return response.status(400).json({
        message: "User already exists...",
        data: null,
      });
    }

    const user = await User.create({ name, email, age });
    let result = await user.save();

    if (!result) {
      response.status(404).json({
        message: "User Not Created...",
        data: null,
      });
    }
    return response.status(201).json({
      message: "User Created Successfully....",
      data: { user },
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error",
      data: null,
    });
  }
};

export const getUser = async (request, response) => {
  const { id } = request.params;
  console.log(id);

  try {
    const user = await User.findOne({ _id: id });
    console.log(user);
    if (!user) {
      return response.status(404).json({
        message: "User not found...",
        data: null,
      });
    }
    return response.status(200).json({
      message: "User found Successfully...",
      data: { user },
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error....",
      error,
    });
  }
};

export const userDelete = async (request, response) => {
  const { id } = request.params;
  console.log(id);

  try {
    const user = await User.deleteOne({ _id: id });
    if (user.deletedCount === 0) {
      return response.status(404).json({
        message: "User Doesn't exists..",
      });
    }
    return response.status(200).json({
      message: "User Deleted Successfully...",
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error....",
      error,
    });
  }
};

export const getAllUser = async (request, response) => {
  try {
    const user = await User.find({});
    if (user) {
      return response.status(200).json({
        message: "User All Data Fetched Successfully...",
        data: user,
      });
    }
    return response.status(404).json({
      message: "User not displayed...",
      data: null,
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error....",
      error,
    });
  }
};

export const updateUser = async (request, response) => {
  const { id } = request.params;
  const { name, age } = request.body;
  try {
    const user = await User.findOneAndUpdate(
      { _id: id },
      { name, age },
      { new: true }
    );
    if (!user) {
      return response.status(404).json({
        message: "User not found...",
        data: null,
      });
    }
    return response.status(200).json({
      message: "User updated Successfully...",
      data: { user },
    });
  } catch (error) {
    return response.status(500).json({
      message: "Internal Server Error....",
      error,
    });
  }
};
