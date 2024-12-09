---
sidebar_position: 2
---

# Get Started

API (Application Programming Interface) allows applications to communicate with each other. Postman is a powerful tool for interacting with APIs, making it easy to test The Furniture Bros API. This guide will walk you through the basics of using Postman to get started with APIs.&#x20;

---

### 🖥️ **Getting Started with Postman**

**Install Postman**

1. Visit Postman's website.
2. Download and install the Postman app for your operating system.
3. Launch Postman and create an account if required.

#### **Import the Postman Collection**

1. Download The Furniture Bros Postman collection using the **"Run in Postman"** button below:

[![Run In Postman](https://run.pstmn.io/button.svg)](https://god.gw.postman.com/run-collection/40166625-6cbe30e8-5760-4132-9411-55a3fa300d77?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D40166625-6cbe30e8-5760-4132-9411-55a3fa300d77%26entityType%3Dcollection%26workspaceId%3D7fcc6d1e-d254-4162-98bf-8e40f5113547)

2. Click the **"Import collection"** link.&#x20;

**Understand the Collection Structure**

- Each collection consists of requests grouped into [different categories](../#endpoint-categories).
- Click on a request to view:
  - **URL:** The API endpoint.
  - **Method:** GET, POST, PUT, DELETE, etc.
  - **Headers:** Metadata required by the API.
  - **Body (if applicable):** Data to send with POST or PUT requests.

Learn more about the structure of a **REST API** by visiting the[ making a request ](making-a-request.md)page.

#### **Make Your First Request**

1. Open the collection and select a request. For example, you can use the `POST http://thefurniturebros.com/auth/register`. This request is located under the _Account_ category.&#x20;
2. Fill out the "**Body"** tab with your account `name`, `email` and `password`.
3. Click **"Send"** to execute the request.
4. Review the response in the bottom panel:
   - **Status Code:** Confirms request success (e.g., 200 OK).
   - **Body:** Displays response data from the API.
5. If your request is successful, you will receive an _API Key_. This key acts like a password; it verifies your identify when making a request. Some endpoints require request to be made with an _API Key_, while some don't. Learn more about [authentication](authentication.md).

---

### 🦶 **Next Steps**

- Explore the API’s full capabilities by running all the requests in the collection.
- Share the collection with your team using Postman’s sharing options.
- Start integrating The Furniture Bros API into your application.&#x20;

By following this guide, you'll be able to use the provided Postman collection to interact with the API effectively.
