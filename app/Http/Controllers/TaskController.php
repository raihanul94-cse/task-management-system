<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
   
    public function main()
    {
        return view('task.index');
    }

    public function index()
    {
        $tasks = Task::all();
        return response()->json($tasks);
    }

    
    public function store(Request $request)
    {
        $validated_task = $this->validate($request, [
            'title' => 'string|required',
            'dueDate' => 'date|required',
            'duration' => 'required',
            'type'  => 'required',
        ]);


        $new_task = Task::create(array_merge($validated_task, [
            'isDone' => true
        ]));
        
        return response()->json($new_task);
    }

    public function update(Request $request, Task $task)
    {
        $validated_task = $this->validate($request, [
            'title' => 'string|required',
            'dueDate' => 'date|required',
            'duration' => 'required',
            'type'  => 'required'
        ]);

        $updated_task = $task->update($validated_task);

        return response()->json($task);
    }

    public function toggleDone(Task $task)
    {
        $task->isDone = !$task->isDone;
        $task->save();
        return response()->json($task->isDone);
    }

    public function destroy(Task $task)
    {
        return response()->json($task->delete());
    }
}
