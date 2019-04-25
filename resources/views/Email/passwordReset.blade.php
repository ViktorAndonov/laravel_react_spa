@component('mail::message')
# Password Reset Email

Click on the button to change your password.

@component('mail::button', ['url' => 'http://laravel_react_spa.test/password/reset?token=' . $token . '&email=' . $email])
Resset Password
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
