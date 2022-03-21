<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Helper\FormService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;

class FormController extends Controller
{
    public function register(Request $request)
    {
        // validated fields
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email:rfc,dns',
            'password' => 'required',
        ]);
        
        //verify if fails validation
        if ($validator->fails()) {

            return response(['status' => false, 'messages' => $validator->messages()], 400);
        }

        //find user from DB
        $user = User::where('email',$request->email)->first();

        //verify if user is signUp
        if($user)
        {
            return response(['status' => false, 'messages' => 'You are Signup, please login.'], 400);
        }

        //create user
        $user = User::create([
            'email' =>$request->email, 
            'password' =>Hash::make($request->password), 
            'name'=>$request->name
        ]);

        //generate personal token
        $token = $user->createToken('User')->plainTextToken;

        //return response
        return response(['status' => true, 'token' => $token, 'user' => $user], 201);
    }

    public function login(Request $request)
    {
        //validated fields
        $validator = Validator::make($request->all(), [
            'email' => 'required|email:rfc,dns',
            'password' => 'required',
        ]);
        
        //verify if fails validation
        if ($validator->fails()) {

            return response(['status' => false, 'messages' => $validator->messages()], 400);
        }

        //find user from DB
        $user = User::where('email',$request->email)->first();

        //verify if user exists
        if(!$user)
        {
            return response(['status' => false, 'messages'=> 'User not found'], 400);
        }

        //check if password are the same
        if(!Hash::check($request->password, $user->password))
        {
            return response(['status' => false, 'messages'=> 'Incorrect Password'], 400);
        }

        //generate token 
        $token = $user->createToken('User')->plainTextToken;

        //response token and status
        return response(['status' => true, 'token' => $token, 'user' =>$user], 200);
    }

    public function user()
    {
        $user = Auth::user();
        return response(['status' => false, 'user'=> $user], 200);
    }

    public function update(Request $request)
    {
        return $request->all();
    }

    public function logout()
    {
        $user = Auth::user();
        // Revoke all tokens...
        $user->tokens()->delete();

        //response token and status
        return response(['status' => false, 'messages'=> 'User logout'], 200);
    }

}