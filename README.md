# SolarNetwork website source

This repository holds the source code and data for building the SolarNetwork main website. The
website is built using [Hugo][hugo].

# Adding posts

Posts are written as Markdown files within **section folders** in the [content/](./content/) folder. For example
**Case Studies** section posts are in the [content/case-studies/](./content/case-studies/) folder.

The easiest way to add a new post is to copy an existing post, named whatever you like. Then modify
the _front matter_ (metadata) section, at the top of the file between `---` delimiters. For example
here is the front matter for a case study:

```yml
---
title: "Zero Energy House"
date: 2017-11-18T10:59:18+13:00
draft: false
weight: 100
brief: "SolarNetwork Foundation helped Zero Energy House integrate their building management system with SolarNetwork to enable real-time sharing of the house's energy environment."
toc: true
key: "zeh"
audience: main
menu:
  main:
      parent: "case-studies"
images:
  logo: /img/case-studies/zeh-logo-280x61.png
---
```

## Front matter to modify

| Key | Description |
|:----|:------------|
| `title` | The title of the post. |
| `date`  | The date of the post (usually the current date). |
| `publishdate` | An optional publish date, for example a future date so the post is not published until then. |
| `draft` | Either `true` if the post is not ready for production, `false` if it is. |
| `weight` | Affects the sort order of the posts. |
| `brief`  | The text to show on the section list page: a brief lead-in style fragment. |
| `toc`    | Either `true` to show in the section list page, or `false` to not include. |
| `key`    | A short, unique identifier for the post. |
| `audience` | One of `main`, `dev`, or `home` for the target audience of the post. |
| `images.logo` | The image to show for the post on the section list page. |

# Notable Shortcodes

The Markdown content supports some specific **shortcodes**, which are little helper snippets for
generating common HTML markup for the website.

## `section/content`

Wrap the content in a "content section". For example:

```
{{<section/content class="sn-light" caption-date="true"
    title="Zero Energy House"
    subtitle="Data-driven comfort">}}

My post content starts here.

{{</section/content>}}
```

| Parameter | Description |
|:----------|:------------|
| `class` | Extra CSS class(es) to add to the section. Typical values are `sn-light`, `sn-alt`, `sn-dark` |
| `title` | The post title (optional) |
| `subtitle` | The post subtitle (optional) |
| `caption-date` | Set to `true` to include the post date as a caption under the subtitle. |

## `quote-bar`

Generate a floating aside section, for an inspirational quote. Typically includes one or more nested
`quote` shortcodes. For example:

```
{{<quote-bar>}}
{{<quote url="https://example.com/" cite="Sweetdance Silvergaze, Fairy">}}
Something notable here.
{{</quote>}}
{{</quote-bar>}}
```

## `quote`

Generate a quote element with a citation. For example:

```
{{<quote url="https://example.com/" cite="Sweetdance Silvergaze, Fairy">}}
Something notable here.
{{</quote>}}
```

| Parameter | Description |
|:----------|:------------|
| `url` | A URL to attribute the quote with. |
| `cite` | The quoted person. |

# Building the website

You need [Hugo][hugo] to build the website.

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
