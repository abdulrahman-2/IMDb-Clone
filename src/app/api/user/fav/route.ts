import User from "@/lib/models/user.model";
import { connectDb } from "@/lib/mongodb/mongoose";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export const PUT = async (req: Request) => {
  const user = await currentUser();
  const client = await clerkClient();

  if (!user) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDb();
    const data = await req.json();

    const existingUser = await User.findById(user.publicMetadata.userMongoId);
    if (!existingUser) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const isMovieInFavs = existingUser.favs.some(
      (fav: any) => fav.movieId === data.movieId
    );

    let updatedUser;
    if (isMovieInFavs) {
      updatedUser = await User.findByIdAndUpdate(
        user.publicMetadata.userMongoId,
        { $pull: { favs: { movieId: data.movieId } } },
        { new: true }
      );
    } else {
      updatedUser = await User.findByIdAndUpdate(
        user.publicMetadata.userMongoId,
        {
          $addToSet: {
            favs: {
              movieId: data.movieId,
              title: data.title,
              description: data.overview,
              dateReleased: data.releaseDate,
              rating: data.voteCount,
              image: data.image,
            },
          },
        },
        { new: true }
      );
    }

    const updatedFavs = updatedUser.favs.map((fav: any) => fav.movieId);
    await client.users.updateUserMetadata(user.id, {
      publicMetadata: { favs: updatedFavs },
    });

    return NextResponse.json(
      { message: "Favorites updated", data: updatedUser },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating favorites:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
};
