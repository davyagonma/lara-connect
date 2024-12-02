<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class FavoritesController extends Controller
{
    public function index()
    {
        return Inertia::render("FavoritesPage");
    }
}
