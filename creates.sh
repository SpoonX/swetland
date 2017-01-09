#!/usr/bin/env bash

curl -H "Content-Type: application/json" -X POST \
-d '{"username":"RWOverdijk", "password":"yoloswag", "email":"wesley@spoonx.nl"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/user

curl -H "Content-Type: application/json" -X POST \
-d '{"name":"List 1", "user":"1"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/list

curl -H "Content-Type: application/json" -X POST \
-d '{"name":"List 2", "user":"1"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/list

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"Task 1","list":"1"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"Task 2","list":"1"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"Task 3","list":"1"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"Task 4","list":"2"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"Task 5","list":"2"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"Task 6","list":"2"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"I like cake","list":"2"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"and yes cake is awesome","list":"2"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"What about cake","list":"1"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

curl -H "Content-Type: application/json" -X POST \
-d '{"task":"Who does not like a good cake, right?","list":"1"}'  \
-H 'accept: application/json' http://127.0.0.1:1337/todo

