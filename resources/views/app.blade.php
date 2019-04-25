<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">

	<meta name="csrf-token" content="{{ csrf_token() }}">

	<title>{{ config('app.name') }}</title>

	<link rel="stylesheet" href="/css/app.css">
</head>
<body>
	<div id="root"></div>

	<script src="/js/vendor.js"></script>
	<script src="/js/manifest.js"></script>
	<script src="/js/app.js"></script>
</body>
</html>
