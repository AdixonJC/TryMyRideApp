<?php

namespace App\Http\Controllers;

use App\Helper\FormService;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function register(Request $request)
    {
        $response = (new FormService($request->name, $request->email, $request->password))->register($request->devicename);
        return response()->json($response);
    }

    public function login(Request $request)
    {

    }
}
