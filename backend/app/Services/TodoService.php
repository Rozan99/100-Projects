<?php

namespace App\Services;

use App\Models\Todo;

class TodoService
{
    // Get all todos
    public function getAll()
    {
        return Todo::all();
    }

    // Create a new todo
    public function create(array $data)
    {
        return Todo::create([
            'title' => $data['title'],
            'duration' => $data['duration'],
            'completed' => false,
        ]);
    }

    // Mark a todo as completed
    public function markCompleted($id)
    {
        $todo = Todo::findOrFail($id);
        $todo->completed = true;
        $todo->save();

        return $todo;
    }

    // Delete a todo
public function delete($id)
{
    $todo = Todo::findOrFail($id); // throws 404 if not found
    $todo->delete();
    return true;
}

}
