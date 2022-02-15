<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    protected $fillable = ['title', 'dueDate', 'duration', 'type', 'isDone'];
}
