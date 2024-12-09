---
sidebar_position: 3
---

# Authentication

The Furniture Bros API uses an _API key_, sometimes referred to as an _API Token_, for authentication. The API key allows you to access protected endpoints and interact with the endpoints securely. Below is a guide on how to authenticate your requests.

### 🔑 API Key

To authenticate with The Furniture Bros API, you need to include an API key in your requests. This key is provided when you sign up and can be used to access the endpoints.

#### How to Include the API Key

You can pass the API key in the request headers as follows:

- `Authorization`:`<API_TOKEN>`

Where `<API_TOKEN>` is your unique API key provided by The Furniture Bros. Use the [Get an API key] endpoint to get an API key.&#x20;

### 👤 User Types

There are two types of users within The Furniture Bros API:

- **Regular Users**: These users can access basic endpoints that do not require administrative privileges.
- **Admin Users**: Admin users have additional permissions and can access endpoints that require higher privileges.

### 🪪 Access to Endpoints

There are 3 levels of access (Authorization) to the endpoints:

- **Endpoints Requiring Admin Access**: Some endpoints are restricted to admin users only. These endpoints will return an error if a regular user attempts to access them. Note that some endpoints can't be accessed if you are an admin.&#x20;
- **Endpoints Requiring Regular User Access**: Some endpoints require an authenticated regular user, and requests without an API key or with an invalid key will be rejected.
- **Public Endpoints**: Certain endpoints do not require any authentication. These endpoints are publicly accessible without the need for an API key.

Your API key contains the information on what type of access you have. To change your level of access, you can modify your account `admin` status using the [Edit User Details] endpoint.&#x20;

### 🔐 Examples of Authentication

#### Example 1: Admin User Request

For an endpoint that requires admin access, include the API key in the header as shown below:

```
curl --location 'http://thefurniturebros.com/users/edit' \
--header 'Authorization: <API_TOKEN>' \
--header 'Content-Type: application/json' \
--data-raw '{
    "userId": "674605a2a18c2f38f2148601",
    "newName": "Jane Doe2",
    "newEmail": "jane_example@gmail.com",
    "newAdminStatus": "true"
}'
```

#### Example 2: Regular User Request

For an endpoint that requires a regular user to be authenticated, the request would look like this:

```
curl --location 'http://thefurniturebros.com/cart/add' \
--header 'Authorization: <API_TOKEN>' \
--header 'Content-Type: application/json' \
--data '{
    "productId": "655fefee60b5a0bcc0a9313c",
    "quantity":25
}'
```

#### Example 3: Public Endpoint Request

For a public endpoint that does not require authentication, simply omit the `Authorization` header:

```
curl --location 'http://thefurniturebros.com/products'
```

### 🔐 Error Handling

If the API key is missing, invalid, or does not have the appropriate permissions, the server will respond with an error message, such as:

```
{
    "message": "Forbidden"
}
```

For endpoints requiring admin access, regular users will receive a `403 Forbidden` error:

```
{
    "msg": "unauthorized user, you are not an administrator"
}
```

### 🖨️ Regenerating API Keys

Each key is valid for 36,000 seconds (10 hours). Once it expires, you'll need to request a new one.If you need to regenerate or revoke your API key, please use the [Get an API key] endpoint to get a new API key. &#x20;
