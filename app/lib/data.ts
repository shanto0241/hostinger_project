import { Users } from "./models";
import { connectToDb } from "./utils";
import { User } from "./types"; // Import the User interface

export const fetchUsers = async (): Promise<User[]> => {
    try {
        await connectToDb();
        const users = await Users.find().lean(); // Use .lean() for plain JavaScript objects
        // Map the documents to User type by ensuring _id is converted to a string
        const mappedUsers: User[] = users.map(user => ({
            _id: user._id.toString(), // Convert ObjectId to string
            username: user.username,
            password: user.password,
            email: user.email,
            phone: user.phone,
            address: user.address,
            createdAt: user.createdAt,
            role: user.role,
            isActive: user.isActive,
            profileImage: user.profileImage
        }));

        return mappedUsers;
    } catch (error) {
        console.error(error);
        throw new Error("Error Fetching Users");
    }
};
