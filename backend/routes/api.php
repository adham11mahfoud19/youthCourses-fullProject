<?php

use App\Models\User;
use App\Models\Coach;
use App\Models\Courses;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/courses',function(){
    return response()->json(Courses::all());
});

Route::get('/users',function() {
    return response()->json(User::all());
});

Route::get('/coach_courses/{id}', function(Request $request){
    $coach = Coach::find($request->id);
    return response()->json($coach->courses);
});