Test big response
=================

This is proof of concept of big response. Tested by using 1.87 GB of data.

## Init project

1) Install dependency:
```
$ npm i
```

2) Generate big json file:
```
$ node public/generate-big.js
```

3) Run server:
```
$ npm start
```

4) Open browser and visit http://localhost:3000/

5) Click on "Generate big response"

6) Wait for a while. Until under button will be shown the link.

7) Click on the link. In new tab will be full response that was in memory.

The front-end solution is here: https://github.com/MeyCry/test-big-response/blob/master/views/index.ejs

The back-end solution is here: https://github.com/MeyCry/test-big-response/blob/master/routes/index.js
