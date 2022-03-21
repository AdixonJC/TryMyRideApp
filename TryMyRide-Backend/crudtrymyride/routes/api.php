<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('register', [FormController::class, 'register']);
Route::post('login', [FormController::class, 'login']);
Route::get('user', [FormController::class, 'user'])->middleware('auth:sanctum');
Route::get('logout', [FormController::class, 'logout'])->middleware('auth:sanctum');
Route::post('update', [FormController::class, 'update'])->middleware('auth:sanctum');