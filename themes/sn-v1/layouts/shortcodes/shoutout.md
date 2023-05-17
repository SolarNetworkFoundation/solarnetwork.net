{{/*
  Named parameters:

   * img (optional) - URL of image to display
   * alt (optional) - image alt value

 */}}
<div class="sn-row sn-shoutout">
  {{ if isset .Params  "img" }}
    <img src="{{ .Get "img" }}"{{ if isset .Params "alt" }} alt="{{ .Get "alt" }}"{{ else if isset .Params "name" }} alt="{{ .Get "name" }} logo"{{ end }} >
    <div>
      {{ if .Inner }}
        {{ .Inner | markdownify }}
      {{ else }}
        This feature was developed with support from our friends at <a href="{{ .Get "url" }}" target="_blank">{{ .Get "name" }}</a>.
      {{ end }}
    </div>
  {{ end }}
</div>
