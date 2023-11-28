// Controllers for CRUD operations
exports.createTask = (req, res) => {
    res.send('Task succesfully created.');
};

exports.getAllTasks = (req, res) => {
    res.send('All tasks.');
}

exports.updateTask = (req, res) => {
    res.send('Task successfully updated.');
}

exports.deleteTask = (req, res) => {
    res.send('Task succesfully deleted.');
}

