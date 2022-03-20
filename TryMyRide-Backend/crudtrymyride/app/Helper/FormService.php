<?php

namespace App\Helper;

use App\Models\Form;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;

class FormService {
    public $name, $email, $password;

    public function __construct($email, $password, $name="" )
    {
        $this->name = $name;
        $this->email = $email;
        $this->password = $password;
    }
    public function validateInput($auth=false)
    {
        $validationRule = $auth ? 'exists:users' : 'unique:users';
        $validator = Validator::make(['email' => $this->email, 'password' => $this->password],
        [
            'email' =>['required', 'email:rfc,dns', $validationRule],
            'password' => ['required', 'string', Password::min(8)]
        ]
        );
        if($validator->fails())
        {
            return ['status' => false, 'messages' => $validator-> messages()];
        }
        else{
            return ['status' => true];
        }
    }


    public function register($deviceName)
    {
        $validate = $this->validateInput();
        if($validate['status'] == false)
        {
            return $validate;
        }
        else{
            $user = User::create(['email' =>$this->email, 'password' =>Hash::make($this->password), 'name'=>$this->name]);
            return ['status' => true, 'token' => $token, 'user' => $user];
        }
    }

    public function login($deviceName)
    {
        $validate = $this->validateInput(true);
        if($validate['status'] == false)
        {
            return $validate;
        }
        else{
            $user = User::where('email',$this->email)->first();
            info($this->password);
            if(Hash::check($this->password, $user->password))
            {
                $token = $user->createToken($deviceName)->plainTextToken;
                return ['status' => true, 'token' => $token, 'user' =>$user];
            }
            else{
                return ['status' => false, 'messages'=>['password'=> ['Incorrect Password']]];
            }
        }
    }
}