<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreTodoRequest;
use App\Services\TodoService;
use Illuminate\Http\Request;

class TodoController extends Controller
{
    protected $todoService;

    // Inject the service for business logics
    public function __construct(TodoService $todoService)
    {
        $this->todoService = $todoService;
    }

    // GET /api/todos
    public function index()
    {
        $todos = $this->todoService->getAll();
        return response()->json($todos);
    }

    // POST /api/todos
    public function store(StoreTodoRequest $request)
    {
        $data = $request->validated();
        $todo = $this->todoService->create($data);
        return response()->json($todo, 201);
    }

    // PATCH /api/todos/{id}/complete
    public function complete($id)
    {
        $todo = $this->todoService->markCompleted($id);
        return response()->json($todo);
    }

    // DELETE /api/todos/{id}
public function destroy($id)
{
    $todo = $this->todoService->delete($id);
    return response()->json(['message' => 'Todo deleted successfully']);
}

}
