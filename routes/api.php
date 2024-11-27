<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\UserController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


/**
 * Authentification APIs
 */
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');

/**
 * Routes protégées par authentification pour gérer le profile utilisateur (création, mise à jour, affichage, suppression)
 */

Route::middleware('auth:sanctum')->group(function () {
    Route::get('/users', [UserController::class, 'index']); // Liste des utilisateurs
    Route::post('/users', [UserController::class, 'store']); // Création d'un utilisateur
    Route::get('/users/{id}', [UserController::class, 'show']); // Afficher un utilisateur
    Route::put('/users/{id}', [UserController::class, 'update']); // Mise à jour d'un utilisateur
    Route::delete('/users/{id}', [UserController::class, 'destroy']); // Suppression d'un utilisateur
});


