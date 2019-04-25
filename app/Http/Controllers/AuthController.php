<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $http = new \GuzzleHttp\Client;

        try
        {
            $response = $http->post(config('services.passport.login_endpoint'), [
                'form_params' => [
                    'grant_type'    => 'password',
                    'client_id'     => config('services.passport.client_id'),
                    'client_secret' => config('services.passport.client_secret'),
                    'username'      => $request->username,
                    'password'      => $request->password,
                    'scope'         => '',
                ],
            ]);
            return json_decode((string) $response->getBody(), true);
        }
        catch (\GuzzleHttp\Exception\BadResponseException $exc)
        {
            if ($exc->getCode() === 400) {
                return response()->json([
                    'error' => 'Invalid Request. Please enter your email and password.'
                ], $exc->getCode());
            } else if ($exc->getCode() == 401) {
                return response()->json([
                    'error' => 'Your credentials are incorrect. Please try again.'
                ], $exc->getCode());
            }
            return response()->json([
                'error' => 'Something went wrong on the server.'
            ], $exc->getCode());
        }
        catch (\GuzzleHttp\Exception\ConnectException $exc) {
            return response()->json([
                'error' => 'Something went wrong on the server.'
            ], $exc->getCode());
        }
    }

    public function register(Request $request)
    {
        $request->validate([
            'first_name' => 'required | string | max:255',
            'last_name'  => 'required | string | max:255',
            'email'      => 'required | string | email | max:255 | unique:users',
            'password'   => 'required | string | min:6 | max:255 | confirmed'
        ]);

        return User::create([
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
            'email'      => $request->email,
            'password'   => Hash::make($request->password)
        ]);
    }

    public function logout(Request $request)
    {
        auth()->guard('api')->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out.');
    }

    public function refresh(Request $request)
    {
        // TODO - refresh token functionality ...
    }
}
