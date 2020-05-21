# project-overnight/po-reviews

> This is the reviews module of Project Overnight.

## Related Projects

  - https://github.com/project-overnight/

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

A  `.env` file is needed inside root and for ./database

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

## CRUD Api

| HTTP VERB | Endpoint | Action |
| --- | --- | --- |
| **POST** | /api/reviews/ | *CREATE* new item in db |
| **GET** | /api/reviews/:id | *READ* item in db |
| **PUT** | /api/reviews/:id | *UPDATE* item in db |
| **DELETE** | /api/reviews/:id | *DELETE* item in db |