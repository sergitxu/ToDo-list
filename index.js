const express = require("express");
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
