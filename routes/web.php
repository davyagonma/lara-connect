<?php

use App\Http\Controllers\ActualityController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\EditProfilePageController;
use App\Http\Controllers\FavoritesController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\PostsDetailsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\SettingsController;
use App\Http\Controllers\SignController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', action: [HomeController::class, 'index'])->name('welcome');
Route::get('/signup', action: [SignController::class, 'index'])->name('signup');
Route::get('/login', action: [LoginController::class, 'index'])->name('login');

Route::get('/chat', action: [ChatController::class, 'index'])->name('chat');
Route::get('/profile', action: [ProfileController::class, 'index'])->name('home');
Route::get('/actuality', action: [ActualityController::class, 'index'])->name('actuality');
Route::get('/edit/profile', action: [EditProfilePageController::class, 'index'])->name('edit');
Route::get('/favorites', action: [FavoritesController::class, 'index'])->name('favorites');
Route::get('/posts/details', action: [PostsDetailsController::class, 'index'])->name('details');
Route::get('/settings', action: [SettingsController::class, 'index'])->name('settings');
