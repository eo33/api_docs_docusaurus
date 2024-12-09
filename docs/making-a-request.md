---
sidebar_position: 4
---

# Making a request

This guide explains the basics of making REST API requests to The Furniture Bros API. It covers essential elements such as HTTP methods, paths, headers, authentication, parameters, pagination, and error handling.

### HTTP method

The FurnitureBros API supports standard HTTP methods:

- **GET**: Retrieve data.
- **POST**: Submit data to create or modify resources.
- **PUT**: Update existing resources.
- **DELETE**: Remove resources.

### Path

API endpoints follow this structure:

```
http://thefurniturebros.com/{endpoint}
```

For example:

- **GET /products**: Get Product List
- **POST /products/upload**: Upload a Product.

### Headers

Requests should include the following headers:

- **Authentication Header**: For endpoints requiring authentication.

  Authorization: &#x3C;API_TOKEN>

- **Content-Type Header**: Specify the format of the request payload.

  ```
  Content-Type: application/json
  ```

For endpoints that require authentication, include your API key in the `Authorization` header. Public endpoints do not require an API key. Learn more [here](authentication.md).

### Content type

Two content types are supported based on the nature of the request:

- **application/json**: Used for most requests with JSON-formatted data.
- **multipart/form-data**: Required for file uploads, such as uploading a product image.

Specify the appropriate `Content-Type` in the header when making a request.

### Parameters

#### Path parameters

Path parameters specify the resource or action in the URL. Examples:

- `GET /prdocuts/{filename}`: Fetch the image of the product.
- `GET /stats/productTable/{page}`: Fetch the information of the products.

#### Body parameters

Most endpoints require a JSON body in the request. Example:

**POST /auth/register**

```
{
    "name": "John Dane",
    "email":"jon_dane@gmail.com",
    "password":"123456"
}
```

#### Query parameters

The Furniture Bros API currently does not use query parameters.

### Pagination

Some endpoints support pagination. Pagination details are specified in the path parameter, like:

- `GET /stats/productTable/{page}`
- `GET /stats/order/all/{page}`
- `GET /users/get_all/{page}`

Example:

```
GET http://thefurniturebros.com/stats/productTable/2
```

### Errors

The API uses standard HTTP response codes to indicate success or failure:

<table><thead><tr><th width="213">Response code</th><th>Description</th></tr></thead><tbody><tr><td>200</td><td>OK. Request was successful.</td></tr><tr><td>400</td><td>Bad Request. The request is invalid or malformed.</td></tr><tr><td>401</td><td>Unauthorized. Missing or invalid API key.</td></tr><tr><td>403</td><td>Forbidden. You do not have permission to access the resource.</td></tr><tr><td>500</td><td>Internal Server Error. An unexpected server error occurred.</td></tr></tbody></table>

### API Status & limitations

The API currently supports the following features and limitations:

- **CORS Support**: The Furniture Bros API allows requests from any device or origin, enabling seamless cross-origin resource sharing (CORS). You can integrate the API into web, mobile, or server-side applications without restrictions.
- **No Rate Limits**: There are no rate limits, so you can make as many requests as needed without encountering a `429 Too Many Requests` error.

For further assistance, refer to the specific endpoint documentation or contact support.
