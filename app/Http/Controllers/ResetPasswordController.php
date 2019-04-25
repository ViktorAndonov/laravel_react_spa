<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class ResetPasswordController extends Controller
{

    public function reset(Request $request)
    {
        $request->validate([
            'email'     => 'required | email',
            'password'  => 'required | confirmed | min:6 | max:255'
        ]);

        return $this->getPassword($request)->count() > 0
            ? $this->changePassword($request)
            : $this->changePasswordError();
    }

    private function getPassword($request)
    {
        return DB::table('password_resets')->where([
            'email' => $request->email,
            'token' => $request->token,
        ]);
    }

    private function changePassword($request)
    {
        $user = User::whereEmail($request->email)->first();

        $user->update([
            'password' => Hash::make($request->password)
        ]);

        $this->getPassword($request)->delete();

        return response()->json([
            'Password successfully changed.'
        ], 201);
    }

    private function changePasswordError()
    {
        return response()->json([
            'Erorr' => 'Incorrect token or email.'
        ], 422);
    }
}
