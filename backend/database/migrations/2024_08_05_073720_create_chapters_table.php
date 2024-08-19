<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chapters', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('desc');
            $table->string('video1')->nullable();
            $table->string('video2')->nullable();
            $table->string('video3')->nullable();
            $table->string('video4')->nullable();
            $table->string('video5')->nullable();
            $table->string('video6')->nullable();
            $table->string('video7')->nullable();
            $table->string('video8')->nullable();
            $table->string('video9')->nullable();
            $table->string('video10')->nullable();
            $table->string('video11')->nullable();
            $table->string('video12')->nullable();
            $table->string('video13')->nullable();
            $table->string('video14')->nullable();
            $table->string('video15')->nullable();
            $table->string('video16')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chapters');
    }
};
