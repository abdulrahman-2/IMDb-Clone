import User from "../models/user.model";
import { connectDb } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id: string | undefined,
  first_name: string | null,
  last_name: string | null,
  image_url: string | null,
  email_addresses: any
) => {
  try {
    await connectDb();
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          profilePicture: image_url,
          email: email_addresses[0].email_address,
        },
      },
      { upsert: true, new: true }
    );
    return user;
  } catch (error) {
    console.log("Error: Could not create or update user", error);
  }
};

export const deleteUser = async (id: string | undefined) => {
  try {
    await connectDb();
    await User.findByIdAndDelete({ clerkId: id });
  } catch (error) {
    console.log("Error: Could not delete user", error);
  }
};
