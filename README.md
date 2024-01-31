# SolarNetwork website source

This repository holds the source code and data for building the SolarNetwork main website. The
website is built using [Hugo][hugo].

# Adding posts

Posts are written as Markdown files within **section folders** in the
[content/resources](./content/resources/) folder. For example **Case Studies** section posts are in
the [content/resources/case-studies](./content/resources/case-studies/) folder.

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
| `slug` | An explicit URL-friendly short unique key to use for the page, instead of deriving one from the file name. |
| `brief`  | The text to show on the section list page: a brief lead-in style fragment. |
| `toc`    | Either `true` to show in the section list page, or `false` to not include. |
| `key`    | A short, unique identifier for the post. |
| `audience` | One of `main`, `dev`, or `home` for the target audience of the post. |
| `images.logo` | The image to show for the post on the section list page. |

# Using git branches

This git repository uses the [Gitflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)
branching model. That means the `develop` branch holds the "most recent" version of the site, and new posts or
general changes are made in `feature/X` branches, where `X` is a short name for the new post/change/feature.

Here is the most reliable way to add a new post:

 1. Create a new **feature branch** for your work. For example, to create a new blog post about the
    new Wizbang SolarNetwork feature: `git flow feature start wizbang-post`.
 2. Create new post Markdown file. You can copy an existing post as a starting point, or `hugo new
    content` like `hugo new content resources/blogs/general/wizbang.md`.
 3. Start up the Hugo web server with `hugo server -DF`, then navigate to <http://localhost:1313> to
    view the site.
 4. Edit your post, and review the result in your browser.
 5. Commit your changes to git. You can make as many commits as you like, as you edit the post over
    time. If the changes will take more than a day to complete, be sure to push your feature branch
    up to Github so your work is saved in the cloud.
 6. When the post is all done, **finish the feature branch** with `git flow feature finish --squash`.
    This will merge your changes back into the `develop` branch, squashing multiple commits into one.

To recap:

```sh
# start feature
git flow feature start my-new-post

# create new post (modify path to match desired blog)
hugo new content resources/blogs/general/my-new-post.md

# edit content, create images, etc

# commit changes to feature branch
git add .
git commit -m 'Create post about New Feature.'

# IF working over multiple days, push the feature branch up to Github
git push --set-upstream origin feature/my-new-post

# when done, merge feature branch into develop
git flow feature finish my-new-post --squash

# push changes up to Github
git push
```

# Images

Images can be placed in the [static/img](./static/img/) folder hierarchy, and referenced in posts
using an absolute path starting with `/img/`. You can use either Markdown or HTML syntax (the latter
being handy for providing a `width` attribute). For example:

```md
![My interesting image](/img/path/to/file.png)
```

```html
<img alt="My interesting image" src="/img/path/to/file.png" width="600">
```

# Notable Shortcodes

The Markdown content supports some specific Hugo **shortcodes**, which are little helper snippets for
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

## `table`

Generate a standard HTML table. For example:

```
{{<table>}}
| Foo | Bar |
|:----|:----|
| Hello | world |
{{</table>}}
```

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
rm -rf public && hugo --baseURL https://solarnetwork.net/
```

The website will be generated in the `public/` directory.

[hugo]: https://gohugo.io/
