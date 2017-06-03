<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\info;
use App\posts;
class infoController extends Controller
{
    public function save(Request $request){
    	$varInfo = new info;
        $varInfo->fullName= $request->fullName;
        $varInfo->mobileNumber= $request->mobileNumber;
        $varInfo->userName= $request->userName;
        $varInfo->passWord= $request->passWord;
        $varInfo->save();
    }
    public function show(Request $request){

    $user = $request->input('userName');
    $pass= $request->input('passWord');
	$varInfo = new info;
    $query = $varInfo->where(['userName'=>$user,'passWord'=>$pass])->get();

    if(count($query)>0)
    {
    	
    	return [1,$user];
    }
    else
    {
    	echo '2';
    }

    }
    public function info(Request $request){
    $user = $request->input('userName');
     $users = info::where('userName','=',$request->userName)->select('fullName')->get();
      return $users->toJson();


    }

    public function search(Request $request){
     $user = $request->input('userName');
    $varInfo = new info;
    $query = $varInfo->where(['userName'=>$user])->get();
    if(count($query)>0)
    {
        return '1';
    }
    else{
        return 'Not Existing User';
    }



   
    /* $users = posts::where('userName','=',$request->userName)->orderBy('post_id','desc')->select('post')->get();
      return $users->toJson();*/
    }
    public function asearch(Request $request){
     
     $users = posts::where('userName','=',$request->userName)->orderBy('post_id','desc')->select('post')->get();
      return $users->toJson();
    }
    public function updateUser(Request $request){
    /* $users = info::where('userName','=',$request->userName);
     $users->passWord= $request->passWord;
     $users->save();*/
     $pass=$request->passWord;
     info::where('userName','=',$request->userName)->update(array('passWord'=>$pass));
     return 'Success';
    }
}
