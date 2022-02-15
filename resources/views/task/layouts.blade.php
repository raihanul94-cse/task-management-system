<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Task Manager</title>
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="{{ asset('css/task.css') }}" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.1.1/js/all.min.js" integrity="sha512-YfPUURC5CqzBHKXk0+zbKsE8BKmnt3TnW64tQkT0kShXIUU/ikFfCD0KPeXEE4cTCt1R/CNGLzjUDcN3AkYBRg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</head>

<body>
    <div class="wrapper">
        @yield('content')
    </div>
    <script src="{{ mix('js/app.js') }}"></script>
</body>

</html>