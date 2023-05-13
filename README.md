# SolarNetwork website source

This repository holds the source code and data for building the SolarNetwork main website.

## Developer server

To run the Hugo developer web server, **including** draft and future content, run `hugo`
like this:

```sh
hugo server -DF
```

## Staging build

To build for staging, **including** draft and future content, run `hugo` like this:

```sh
rm -rf public && hugo -DF
```

The website will be generated in the `public/` directory.

## Production build

To build for production, **excluding** draft content, run `hugo` like this:

```sh
rm -rf public && hugo --baseURL https://solarnetwork.org.nz/
```

The website will be generated in the `public/` directory.

[hugo]: https://gohugo.io/
