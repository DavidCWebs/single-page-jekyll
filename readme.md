#About this site:

This is a Bootstrap Jekyll website.

##NOTE Re: Gruntfile
This repo does not have a working Gruntfile - this is because the Gruntfile has a deploy task, with sensitive server login details. It has been gitignored.

To set up your Gruntfile, copy HINTGruntfile.js and copy the relevant server credentials into the deploy task.

##Content
The content is brought through in a modular fashion, with the content being written as includes in
the markdown format. The Gruntfile runs Livereload alongside the other standard tasks. All the images are responsive. See the site wiki for more info.
