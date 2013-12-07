use Rack::Static, 
  :urls => ["/css", "/img", "/js", "/fonts", "/jquery.bxslider", "/doc", "/page.html", "/locations.html", "/index.html", "/photos.html", "/contact.html"],
  :root => "public"

run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('public/index.html', File::RDONLY)
  ]  
}
