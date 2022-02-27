# Simple api server app using Expressjs 4 used with HAPROXY
<p> This is a simple JS server app using express npm package. It has HAProxy configuration files to run app and perform load balancing at the layer4 and layer7. Follow the commands listed below to compile and perform a demo locally. This project is intended for knowledge sharing and learning purposes.</p>


Clone or Download code and run the following steps.

1. Install the npm dependencies
```
npm install
```

2. To demo the tcp layer 4 load balancing by HAproxy (which will use tcp.cfg file). Open 3 terminal windows.
```
T1. export PORT=1111 && node run start_tcp
T2. export PORT=2222 && node run start_tcp
T3. haproxy -f tcp.cfg
```

3. Open chrome browser and type this link
```
http://localhost:8888/api1
```

2. To demo the HTTP layer 4 load balancing by HAproxy (which will use http.cfg file). Open 5 terminal windows.
```
T1. export PORT=4444 && node run start_http
T2. export PORT=5555 && node run start_http
T3. export PORT=6666 && node run start_http
T4. export PORT=7777 && node run start_http
T5. haproxy -f http.cfg
```

3. Open chrome browser and type this link in 2 tabs/windows
```
W1. http://localhost:9999/api1
W2. http://localhost:9999/api2
```


Reference Reading Materials:
1. https://www.youtube.com/watch?v=aKMLgFVxZYk&ab_channel=HusseinNasser
2. https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-load-balancing-concepts
3. https://www.haproxy.com/blog/haproxy-configuration-basics-load-balance-your-servers/

TODO:
1. Run this app inside docker and direct HAPROXY to use docker port instead of app port
2. Add more dynamic Content
3. Test with nginx (which apprently is easier to configure)
