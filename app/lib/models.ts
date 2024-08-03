import mongoose, { Schema, Document, Model } from "mongoose";
import { User } from "./types"; // Import the User interface

// Extend Mongoose Document for type safety
interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
  profileImage?: string;
  role: string;
  phone?:string;
  address?: string;
  isActive: boolean;
}

// Define the schema
const userSchema: Schema<IUser> = new Schema({
  username: { type: String, required: true , unique:true },
  email: { type: String, required: true, unique:true },
  password: { type: String, required: true },
  phone: {type: String},
  address: {type: String},
  profileImage: { type: String },
  createdAt: { type: Date, default: Date.now },
  role: { type: String, required: true },
  isActive: { type: Boolean, default: false },
});

// Create the model
const Users: Model<IUser> =  mongoose.models.User || mongoose.model<IUser>("User", userSchema);




// model for Images
export const imageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    imgUrl: {
        type: String,

    },
    caption: {
        type: String,
        required: true
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    albumName:[]
}, {timestamps:true});


export const Images = mongoose.models.Images || mongoose.model('Images', imageSchema)



export { Users };