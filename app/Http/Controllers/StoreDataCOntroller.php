<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Form;

class StoreDataCOntroller extends Controller
{
    public function store(){
        $data = new Form();

        $data->firstName = request('firstName');
        $data->lastName = request('lastName');
        $data->email = request('email');
        $data->number = request('number');
        $data->gender = request('gender');
        $data->dob = request('dob');
        $data->comments = request('comments') ? : " ";
        

        


       

        $data->save();
        return response()->created();
    }
}
