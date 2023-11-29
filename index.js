
const MONGO = require('./secrets');

const express = require("express");
const mongoose = require("mongoose");
const taskController = require("./controllers/taskController");

const app = express();

app.listen(3000, () => console.log("Server listening at port 3000"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.get("/tasks", taskController.getAllTasks);
app.post("/tasks", taskController.createTask);
app.put("/tasks/:id", taskController.updateTask);
app.delete("/tasks/:id", taskController.deleteTask);

mongoose.connect(
    MONGO.connectionString,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

const taskSchema = {
    title: { type: String, required: true },
    description: String,
    dueDate: Date,
    completed: Boolean,
    createdAt: { type: Date, default: Date.now },
    updatedAt: Date,
    deletedAt: Date
}

const Task = mongoose.model('Task', taskSchema);

const task = new Task({
    title: 'Task 2',
    description: 'Description 2',
    dueDate: new Date(),
    completed: false
});
task.save()
    .then(
        () => console.log("One task added"),
        (err) => console.log(err)
    );