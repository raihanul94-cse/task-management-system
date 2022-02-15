<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'TaskController@main');
Route::resource('/tasks', 'TaskController');
Route::post('/tasks/toggle/{task}', 'TaskController@toggleDone');
