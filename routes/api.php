<?php

use Illuminate\Http\Request;
use App\image;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('sumting',function(Request $request){

echo 'sumting wong';
});

Route::post('save', 'infoController@save');

Route::post('login', 'infoController@show');

Route::post('main','postController@getPosts');

Route::post('post','postController@post');

Route::get('wall/{username}','postController@show');

Route::post('info', 'infoController@info');

Route::post('image','postController@image');

Route::post('gImg', function(Request $request){
 		
/*request()->file('image')->store('public/image');
return 'success';*/

$image = request()->file('image');
$filename = $image->getClientOriginalName();
Storage::put('public/image/'. $filename, file_get_contents(request()->file('image')->getRealPath()));
$name = request()->input('username');
$user = $request->userName;
$image = new image;
$image->image=$filename;
$image->userName= $name;
$image->save();
});


Route::post('search','infoController@search');

Route::post('asearch','infoController@asearch');

Route::post('getProfile','imageController@returnImg');

Route::post('addFriend','addfriendController@addfriend');

Route::post('showFriend','addfriendController@showFriends');

Route::post('update','infoController@updateUser');

