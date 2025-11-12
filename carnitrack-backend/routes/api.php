<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\ProductoController;

// Rutas API REST para productos
Route::apiResource('productos', ProductoController::class);