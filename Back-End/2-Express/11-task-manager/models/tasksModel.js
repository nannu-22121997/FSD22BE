import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  username: String,
  completed: Boolean,
});

const Tasks = mongoose.model("Tasks", taskSchema);

export default Tasks;
