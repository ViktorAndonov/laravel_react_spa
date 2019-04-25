<?php

namespace App\Http\Controllers;

use App\User;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Mail\ResetPasswordMail;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class ForgotPasswordController extends Controller
{
    /**
    * Send a reset link to the given user.
    *
    * @return boolean
    */
    public function forgot(Request $request)
    {
        $request->validate([
            'email' => 'required | string | email | max:255',
        ]);

        if (!$this->validateEmail($request->email)) {
            return $this->failedResponse();
        }

        $this->sendEmail($request->email);

        return $this->successResponse();
    }

    /**
    * Validate the email for the given request.
    *
    * @return boolean
    */
    public function validateEmail($email)
    {
        return !! User::where('email', $email)->first(); // !! - makes it boolean.
    }

    /**
     * Add's the token to the mail that will be send.
     *
     * @return void
     **/
    public function sendEmail($email)
    {
        $token = $this->createToken($email);

        Mail::to($email)->send(new ResetPasswordMail($token, $email));
    }

    /**
     * Checks if token exists and retuns the existing(old) token,
     * if not it creates a new password reset token.
     *
     **/
    public function createToken($email)
    {
        $oldToken = DB::table('password_resets')->where('email', $email)->value('token');

        if ($oldToken) {
            return $oldToken;
        }

        $token = str_random(60);

        $this->saveToken($token, $email);

        return $token;
    }

    /**
    * Save the token to the database.
    *
    * @return void
    **/
    public function saveToken($token, $email)
    {
        DB::table('password_resets')->insert([
            'email' => $email,
            'token' => $token,
            'created_at' => Carbon::now()
        ]);
    }

    /**
    * Get the response for a failed password reset link.
    *
    * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
    **/
    public function failedResponse()
    {
        return response()->json([
            'message' => 'Email was not found.'
        ], 404);
    }

    /**
    * Get the response for a successful password reset link.
    *
    * @return \Illuminate\Http\RedirectResponse|\Illuminate\Http\JsonResponse
    **/
    public function successResponse()
    {
        return response()->json('Email to resset your passowrd was send, please check your inbox.', 200);
    }
}
