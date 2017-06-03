<?php

namespace App\Http\Controllers;
use App\image;
use Illuminate\Http\Request;

class imageController extends Controller
{
    public function image(Request $request){

    	$postInfo = new image;
    	$postInfo->userName= $request->userName;
        $postInfo->image= $request->img;
        $postInfo->save();
        return 'Success';

    }
    public function returnImg(Request $request){

      $users = image::where('userName','=',$request->userName)->select('image')->get()->last();
      return $users->toJson();

    }
}
