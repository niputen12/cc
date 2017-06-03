<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\addfriend;
class addfriendController extends Controller
{
    public function addfriend(Request $request){
    	$varInfo = new addfriend;
        $varInfo->userName= $request->userName;
        $varInfo->friendName= $request->friendUser;
        $varInfo->save();
        return 'Success';
    }
    public function showFriends(Request $request){
    	 $user = $request->input('userName');
    	 $varInfo = new addfriend;
    	 $query = $varInfo->where(['userName'=>$user])->select('friendName')->get();
    	 return $query->toJson();
    }
}
