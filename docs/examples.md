---
sidebar_position: 5
---

# Examples

This section provides an example of an API request in different programming languages to help you quickly integrate The Furniture Bros API into your application. In the API docs section, each endpoint includes code snippets in various languages for easy copy-pasting. For this example, we will be using this endpoint:

`POST /auth/register` - This endpoint allows you to create and register an account.&#x20;

### cURL

```curl
curl --location 'http://thefurniturebros.com/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
    "name": "John Dane",
    "email":"jon_dane@gmail.com",
    "password":"123456",
    "admin": false
}'
```

### JavaScript

```Javascript
const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "name": "John Dane",
  "email": "jon_dane@gmail.com",
  "password": "123456",
  "admin": false
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("http://thefurniturebros.com/auth/register", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
```

### Python

```Python
import http.client
import json

conn = http.client.HTTPConnection("thefurniturebros.com")
payload = json.dumps({
  "name": "John Dane",
  "email": "jon_dane@gmail.com",
  "password": "123456",
  "admin": False
})
headers = {
  'Content-Type': 'application/json'
}
conn.request("POST", "/auth/register", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))
```

### Java

```java
OkHttpClient client = new OkHttpClient().newBuilder()
  .build();
MediaType mediaType = MediaType.parse("application/json");
RequestBody body = RequestBody.create(mediaType, "{\r\n    \"name\": \"John Dane\",\r\n    \"email\":\"jon_dane@gmail.com\",\r\n    \"password\":\"123456\",\r\n    \"admin\": false\r\n}");
Request request = new Request.Builder()
  .url("http://thefurniturebros.com/auth/register")
  .method("POST", body)
  .addHeader("Content-Type", "application/json")
  .build();
Response response = client.newCall(request).execute();
```
