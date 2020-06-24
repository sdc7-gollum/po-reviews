# Project Overnight

> This is the reviews module of Project Overnight. Displays user picture, user name, date, text, and 6 numerical ratings for reviews.

## Related Projects

  - https://github.com/project-overnight/
  - https://github.com/sdc7-gollum/po-zdeckert-proxy
  - https://github.com/sdc7-gollum/po-reservations
  - https://github.com/sdc7-gollum/po-photo-banner
  
## Usage

> This app contians 10,000,000 unique pages. Example: http://localhost:3030/?10

## Requirements

- Node 12
- PostgreSQL 12

## Installing Dependencies

From within the root directory:

```sh
npm install
```

To install PostreSQL, please follow these instructions [here](https://www.postgresql.org/download/linux/ubuntu/)

## Build Bundle

```sh
npm run build
```

## Start Server

```sh
npm run start
```
## Generate Data

```sh
npm run csv1
```

## Seed Database

```sh
npm run seed
```

## CRUD Api

| HTTP VERB | Endpoint | Action |
| --- | --- | --- |
| **POST** | /api/reviews/ | *CREATE* new item in db |
| **GET** | /api/reviews/:id | *READ* item in db |
| **PUT** | /api/reviews/:id | *UPDATE* item in db |
| **DELETE** | /api/reviews/:id | *DELETE* item in db |
