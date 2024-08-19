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
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('author');
            $table->string('chapter1')->nullable();
            $table->string('chapter2')->nullable();
            $table->string('chapter3')->nullable();
            $table->string('chapter4')->nullable();
            $table->string('chapter5')->nullable();
            $table->string('chapter6')->nullable();
            $table->string('chapter7')->nullable();
            $table->string('chapter8')->nullable();
            $table->string('chapter9')->nullable();
            $table->string('chapter10')->nullable();
            $table->string('chapter12')->nullable();
            $table->string('chapter13')->nullable();
            $table->string('chapter14')->nullable();
            $table->string('chapter15')->nullable();
            $table->string('chapter16')->nullable();            

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
