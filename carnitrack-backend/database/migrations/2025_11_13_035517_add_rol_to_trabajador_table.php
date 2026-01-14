<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('trabajador', function (Blueprint $table) {
            $table->string('rol', 20)->default('empleado');
        });
    }

    public function down(): void
    {
        Schema::table('trabajador', function (Blueprint $table) {
            $table->dropColumn('rol');
        });
    }
};