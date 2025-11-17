<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\SalidaProductoController;  // ← con Api
use App\Http\Controllers\Api\ProductoController;
use App\Http\Controllers\Api\LoginController;
use App\Http\Controllers\Api\TrabajadorController;     // Si lo usas

Route::post('/login', [LoginController::class, 'login']);

// SALIDAS - PRIORIDAD ALTA
Route::get('/productos', [SalidaProductoController::class, 'obtenerProductos']);
Route::post('/salida', [SalidaProductoController::class, 'registrarSalida']);
Route::get('/productos-mas-vendidos', [SalidaProductoController::class, 'obtenerProductosMasVendidos']);
Route::get('/ventas-productos', [SalidaProductoController::class, 'obtenerVentasProductos']);
Route::apiResource('trabajadores', TrabajadorController::class);

// CRUD PRODUCTOS
Route::post('/productos', [ProductoController::class, 'store']);
Route::get('/productos/{id}', [ProductoController::class, 'show'])
    ->where('id', 'CAR-[A-Z]+-\d+');
Route::put('/productos/{id}', [ProductoController::class, 'update'])
    ->where('id', 'CAR-[A-Z]+-\d+');
Route::delete('/productos/{id}', [ProductoController::class, 'destroy'])
    ->where('id', 'CAR-[A-Z]+-\d+');