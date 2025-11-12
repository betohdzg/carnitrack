<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Producto extends Model
{
    protected $fillable = [
        'nombre',
        'tipo_carne',
        'precio_kg',
        'stock_kg',
        'fecha_entrada',
        'fecha_caducidad'
    ];
}