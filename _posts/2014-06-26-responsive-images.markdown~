---
layout: post
title:  "Responsive Images in a Jekyll post"
date:   2014-06-26 12:54:44
categories: jekyll update
---

How to add a responsive image to a Jekyll post:

Create a folder called assets in the root directory of your project, into which any images, downloads or any other assets are placed. They can then be linked to in the post.

Install jekyll-image-tag. This requires both Minimagick and Imagemagick to work.

You can install Minimagick with the command:
```sudo gem install jekyll-minimagick```

In a plugin file within your projects _plugins directory add:

{% highlight html %}{% raw %}

# _plugins/my-plugin.rb
require "jekyll-minimagick"

{% endraw %}{% endhighlight %}

Define presets in your _config.yml file:

{% highlight html %}{% raw %}

		image:
 		source: assets
 		 output: generated
  		presets:
   	 		users:
      		attr:
        	class: img-responsive
        	itemprop: image
      	width: 350
    	half:
    width: 500
    height: 500

{% endraw %}{% endhighlight %}

Once you have the requirements installed, download jekyll-image-tag and copy image_tag.rb to your Jekyll _plugins folder.

Link the image from your assets folder to your post using the format:

{% highlight html %}{% raw %}

{% image preset or WxH path/to/img.jpg attr="value" %}

{% endraw %}{% endhighlight %}

My code looked like this:

{% highlight html %}{% raw %}

{% image 300x300 Caribbean_reef_shark.jpg class="img-responsive" %}

{% endraw %}{% endhighlight %}
