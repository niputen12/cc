<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\posts;
class postController extends Controller
{
    public function getPosts(Request $request){
      $users = posts::where('userName','=',$request->userName)->orderBy('post_id','desc')->select('post')->get();
      return $users->toJson();
    	

    }

    public function post(Request $request){
    	  $postInfo = new posts;
        $postInfo->userName= $request->userName;
        $postInfo->post= $request->post;
        $postInfo->save();
        return 'Success';

    }
    public function show(){
      $username = $_GET['request'];
      $users = posts::where('userName','=',$username->userName)->get();
      return $users->toJson();


    }

    public function image(Request $request){
   
    return  'kups';
}
}