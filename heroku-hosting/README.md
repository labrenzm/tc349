Heroku Static Sites (Cedar)
===========================

A simple static site template for Heroku's Cedar stack.

Getting Started
---------------

### Clone the repository

    git clone https://github.com/jsiarto/heroku-static-cedar.git
    
### Create a new Heroku Cedar app

    heroku create --stack cedar
    
### Deploy

    git push heroku master
    
### Demo
[http://herokustatic.herokuapp.com/](http://herokustatic.herokuapp.com/)

    
Adding Pages
---------------

You can add additional pages and directories by defining them `:urls` hash:

    :urls => ["/stylesheets", "/images", "/javascript", "/page.html"],

*Make sure you also create the new files in `/public` as well.*