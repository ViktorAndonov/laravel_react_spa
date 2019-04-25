<?php

use Illuminate\Http\Request;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Auth. Routes
Route::post('/login', 'AuthController@login')->name('auth.login');
Route::post('/register', 'AuthController@register')->name('auth.register');
Route::post('/logout', 'AuthController@logout')->name('auth.logout')->middleware('auth:api');
// Route::post('/refresh', 'AuthController@login')->name('refresh');

// Password Reset
Route::post('forgot', 'ForgotPasswordController@forgot')->name('auth.forgot');
Route::post('reset', 'ResetPasswordController@reset')->name('auth.reset');

// Note Routes
Route::apiResource('notes', 'NoteController')->middleware('auth:api');