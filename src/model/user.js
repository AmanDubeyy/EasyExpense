import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        required: true
      },
      email: {
        type: String,
        required: true
      }
},{ strict: false });

userSchema.statics.getByEmail = function(email) {
    return this.findOne({ email: email });
};

const User = mongoose.models.user || mongoose.model("user", userSchema);

export default User;
