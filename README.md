# ![](https://i.imgur.com/eQQ5O8N.png)

> ### REACT+REDUX+NEXTJS codebase containing real world examples (CRUD, auth, advanced patterns, etc) that adheres to the [RealWorld](https://github.com/gothinkster/realworld) spec and API.

### [Demo](https://github.com/gothinkster/realworld)&nbsp;&nbsp;&nbsp;&nbsp;[RealWorld](https://github.com/gothinkster/realworld)

This codebase was created to demonstrate a fully fledged fullstack application built with **REACT+REDUX+NEXTJS** including CRUD operations, authentication, routing, pagination, and more.

We've gone to great lengths to adhere to the **REACT+REDUX+NEXTJS ** community styleguides & best practices.

For more information on how to this works with other frontends/backends, head over to the [RealWorld](https://github.com/gothinkster/realworld) repo.

### Based on the following:

1. Official examples `NextJS + React + Redux`: https://github.com/zeit/next.js/tree/master/examples/with-redux
2. Realworld `React + Redux` https://github.com/gothinkster/react-redux-realworld-example-app

# How it works

General page breakdown

- Home page (URL: /#/ )
  - List of tags
  - List of articles pulled from either Feed, Global, or by Tag
  - Pagination for list of articles
- Sign in/Sign up pages (URL: /#/login, /#/register )
  - Use JWT (store the token in localStorage)
- Settings page (URL: /#/settings )
- Editor page to create/edit articles (URL: /#/editor, /#/editor/article-slug-here )
- Article page (URL: /#/article/article-slug-here )
  - Delete article button (only shown to article's author)
  - Render markdown from server client side
  - Comments section at bottom of page
  - Delete comment button (only shown to comment's author)
- Profile page (URL: /#/@username, /#/@username/favorites )
  - Show basic user info
  - List of articles populated from author's created articles or author's favorited articles

# Getting started

You can view a live demo over at [INSERT FINISHED LINK]

To get frontend running locally

1. Clone this repo
2. `npm install`
3. `npm start`

# Checklist

- [x] Generate Folder Structure
- [x] Add NextJS Routing for major endpoints
- [x] Add in dummy-templating
- [x] Add Redux boilerplate
- [ ] Add Links to routes
- [ ] Add Dynamic Route supports
- [ ] Split into reuseable components
- [ ] Add Logic
- [ ] API Test Calls
- [ ] add `__test__` jest suite
