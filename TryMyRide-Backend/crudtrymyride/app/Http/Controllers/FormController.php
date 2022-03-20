<?php

namespace App\Http\Controllers;

use App\Helper\FormService;
use Illuminate\Http\Request;

class FormController extends Controller
{
    public function register(Request $request)
    {
        $response = (new FormService($request->email, $request->password, $request->name))->register($request->deviceName);
        return response()->json($response);
    }

    public function login(Request $request)
    {
        $response = (new FormService($request->email, $request->password))->login($request->deviceName);
        return response()->json($response);
    }
}
