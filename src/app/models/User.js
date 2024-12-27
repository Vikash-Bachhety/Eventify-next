import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:  {
        type: String,
    },
    email:  {
        type: String,
        unique: true,
        required: true
    },
    gender:  {
        type: String,
        required: true
    },
    phone:  {
        type: String,
        unique: true,
        required: true
    },
    ageGroup: {
        type: String,
        required: true
    },
    city:  {
        type: String,
        required: true
    },
    password:  {
        type: String,
        required: true
    }
});

const Users = mongoose.models.users || mongoose.model("users", userSchema);
export default Users;