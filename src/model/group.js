import mongoose, { Schema } from "mongoose";

const GroupSchema = new Schema({
    group_name : String,
    description : String,
}, {strict : false})

const Group = mongoose.models.group || mongoose.model('group', GroupSchema);

export default Group;