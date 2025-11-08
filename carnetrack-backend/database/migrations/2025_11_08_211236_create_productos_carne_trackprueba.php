<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('productos', function (Blueprint $table) {
            $table->id();
            $table->string('tipo');           // Res, Cerdo, etc.
            $table->string('nombre');         // Filete, Costilla, etc.
            $table->decimal('venta_kg', 8, 2); // ¿Se vende por kg?
            $table->decimal('precio', 8, 2);  // Precio
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('productos');
    }
};