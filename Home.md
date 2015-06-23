# Welcome

Welcome to your wiki! This is the default page we've installed for your convenience. Go ahead and edit it.

## Wiki features

This wiki uses the [Markdown](http://daringfireball.net/projects/markdown/) syntax.

The wiki itself is actually a git repository, which means you can clone it, edit it locally/offline, add images or any other file type, and push it back to us. It will be live immediately.

Go ahead and try:

```
$ git clone https://Maddog415@bitbucket.org/Maddog415/lrm.git/wiki
```

#LRM Wiki


This is the wiki page for the LRM site, a flat Jekyll template. The site requires Bower, Ruby, Jekyll, and the Grunt Cli to be installed on your computer, and uses Bootstrap 3 and JQuery. Once the repo has been cloned, run the command:

```
$ npm install
```
Once this has been done, serve the site by running the command:

```
$ grunt
```

This site uses the markdown.rb plugin in order to render markdown in a Jekyll include.

#How to render markdown in a jekyll include:

This method creates a tag called "markdown" that can be used instead of the "include" tag.

Create a file called "markdown.rb" in your sites _plugins directory. In the file include this code:

```
=begin

  Jekyll tag to include Markdown text from _includes directory preprocessing with Liquid.

  Usage:

    {% markdown <filename> %}

  Dependency:

    - kramdown

=end

module Jekyll

  class MarkdownTag < Liquid::Tag

    def initialize(tag_name, text, tokens)

      super

      @text = text.strip

    end

    require "kramdown"

    def render(context)

      tmpl = File.read File.join Dir.pwd, "_includes", @text

      site = context.registers[:site]

      tmpl = (Liquid::Template.parse tmpl).render site.site_payload

      html = Kramdown::Document.new(tmpl).to_html

    end

  end

end

Liquid::Template.register_tag('markdown', Jekyll::MarkdownTag)
```

You can now use the "markdown" tag instead of the "include" tag to bring through includes with markdown rendered. For example:

{% markdown box-1.markdown %}

Instead of:

{% include box-1.markdown %}
