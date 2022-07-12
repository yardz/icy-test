This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, copy the `.env.example` file to `.env` and replace the example values ​​with their respective ones.

Then run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Important: Is necessary to have a MetaMask installed in order to use this app.

# General explanations

For this project I created the pages using Incremental Static Generation (ISG) to generate the HTML code for each page.

Folder `/pages` has just the code needed to generate the pages in next. All additional code is inside the `/src` folder. Each component or function is inside its own folder, because when creating the test files, everything will be much more organized.

# Technical Question

- Handles user authentication

  - Would you need a database?

    R: It depends on the features and which contracts the application is using. In the case of a web3 application, a database would not be necessary, as the "user" can be considered the address
    If it is a "regular application", then yes, we would need a database. We can still use some third party system for authentication, but saving user data would need a database.

  - Which one and what might the schema look like?

    It depends. at first in the user's table/collection I would put only the necessary data. (ex: email, password -only hash-, user name)
    In general I always use as few fields as possible. As requirements become clearer or something new is needed, I update the schema

  - Are their pros/cons to a specific choice? (SQL vs NoSQL)

    SQL are generally better for very well-organized data, and also for data mining. Its disadvantage is mainly its availability (which is generally lower than NoSQL databases) and its writing speed, which is also lower.
    Another advantage of SQL is when you have data spread across multiple tables. They tend to have much more performant "joins" and are also a general purpose choice.

    NoSQL they are usually faster and have greater availability, but we must be careful because they offer occasional consistency.
    Also because they don't have a native schema, they tend to be more "dangerous" in disorganized environments.
    Another difference is that each NoSQL has different characteristics so it tends to be a more "specialized" choice for each case.

- Serves data to the client via an API

  - What kind of API would you use?

    Personally I like to make it available in REST API and GraphQL.
    Using apollo server and a good code structure, it is possible to reuse the vast majority of code in the Rest API and GraphQL.

    I choose to keep both as it makes it easier for a third party to use. However, if it is necessary to choose only one, I would prefer GraphQL because the fact of allowing the request of only the necessary fields will make my system consume less network resources.

    Personally I see that many systems don't use this, but in the "worst case" consumption will be very close to an REST API, and for customers who want to optimize their apps, it will be excellent

- Scales to handle thousands of requests per second

  - This could involve a lot of different optimizations, but what would you try first or what are the top three you might consider?

    Database reading (creation of the correct indexes).

    API response cache (Also cache for responses from APIs we consume)

    Maybe use an redis 9or similar) to cache data from our database.

    would use fastify (https://www.fastify.io/) instead of expression. Because fastify has better results in load tests.

    Load tests to discover potential bottlenecks.

- Provides real-time updates to clients as new data is available

  We can use websockets for this. I've never made a system with multiple accesses with websocket so I have no idea how to optimize it.
  When I needed to solve this problem, I used firebase.
