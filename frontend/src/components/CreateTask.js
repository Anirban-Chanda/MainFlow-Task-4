import React, { useState } from 'react';

const CreateTask = ({ createTask }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim()) {
            createTask({id: new Date().getTime(), name: name, tasks: []});
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex align-items-center gap">
            <input
                className="input input-primary"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Task"
            />
            <button className="btn btn-primary" type="submit">Add new</button>
        </form>
    );
};

export default CreateTask;
