<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This redirects all routes to the home route "/" (the view that has the react app).
| This is because we controll the front-end via the React app with React Router.
| When the JS is read, React Router takes the routing and points to the correct URL.
|
*/

Route::get('/{any}', function () {
    return view('app');
})->where('any', '.*');
