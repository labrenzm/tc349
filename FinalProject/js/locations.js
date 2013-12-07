function initialize() {
  var startloca = new google.maps.LatLng(43.605715,-83.964558);
  var nunion = new google.maps.LatLng(43.609503,-83.906704);
  var nunion2 = new google.maps.LatLng(43.609478,-83.906407);
  var birney = new google.maps.LatLng(43.59315,-83.874967);
  var madison = new google.maps.LatLng(43.591365, -83.885757);
  var fitchu = new google.maps.LatLng(43.588366, -83.888319);
  var webster = new google.maps.LatLng(43.568698, -83.897706);
  var erie = new google.maps.LatLng(43.601072, -83.906453);
  var erie_house = new google.maps.LatLng(43.600911, -83.906437);
  /*var walnut = new google.maps.LatLng(*/
  var wenonah = new google.maps.LatLng(43.604569, -83.904773);
  var raymond = new google.maps.LatLng(43.601422, -83.909728);
  var schmit = new google.maps.LatLng(43.604835, -84.070140);
  var auburn_house = new google.maps.LatLng(43.603301, -84.073268);
  var auburn_smallhouse = new google.maps.LatLng(43.602963, -84.073284);


  var mapOptions = {
    zoom: 12,
    center: startloca
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var union2_info = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<div id="bodyContent">'+
      '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/208_union.jpg" width="450" height="250">'+
      '<p><b>208 W. N. Union St.</b><br>Four 2-Bedroom Apartments<br>Rent: $350-$550/month <br>Status: <b>1 Apartment Available</b><br>Pets: Not allowed</p>'+
      /*'<p><a href="#union1">'+
      'More Information</a></p>'+*/
      '</div>'+
      '</div>';
      
      
	var union_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/210_union.jpg" width="350" height="250">'+
	  '<p><b>210 W. N. Union St.</b><br>Twelve 1-Bedroom Apartments<br>Rent: $350-$550/month<br>Status: <b>2 Apartments Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#union2">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var birney_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/birney_front2.jpg" width="240" height="250">'+
	  '<p><b>400 N. Birney St.</b><br>Four 1-Bedroom Apartments<br>Rent: $350-$550/month<br>Status: <b>1 Apartment Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#birney">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var madison_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/madison_front.jpg" width="250" height="250">'+
	  '<p><b>223 N. Madison St.</b><br>Three 1-Bedrooms, Three Efficiences<br>Rent: $350-$550/month<br>Status: <b>One Efficieny Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#madison">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var fitchu_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/fitzhugh_front.jpg" width="250" height="250">'+
	  '<p><b>207 Fitzhugh St</b><br>One 3-Bedroom, One Efficiency<br>Rent: $350-$550/month<br>Status: <b>1 Efficiency Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#fitchu">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var webster_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/webster_front.jpg" width="275" height="250">'+
	  '<p><b>1200 Webster St.</b><br>Two 2-Bedrooms, One 1-Bedroom<br>Rent: $350-$550/month<br>Status: <b>One 1-Bedroom Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#webster">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var erie_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/erie_front.jpg" width="250" height="250">'+
	  '<p><b>200 S. Erie St.</b><br>One 2-Bedroom, Two 1-Bedrooms<br>Rent: $350-$550/month<br>Status: <b>None Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#erie">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var erie_house_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/erie_house.jpg" width="350" height="250">'+
	  '<p><b>202 S. Erie St. </b><br>Single Family House<br>Rent: $350-$550/month<br>Status: <b>Not Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#erie_house">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	/*var walnut_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="http://t0.gstatic.com/images?q=tbn:ANd9GcQfFnpKQANKx7f61fjpBMN6wVeNXdoNz7gabEhCExktuhNudeburw" title="Hosted by imgur.com" width="200" height="250">'+
	  '<p><b>400 N. Birney St.</b><br>Rent: $$$ <br>Status: <b>1 Bedroom Available</b><br>Pets: Not allowed</p>'+
	  '<p><a href="#walnut">'+
	  'More Information</a></p>'+
	  '</div>'+
	  '</div>';*/
	  
	var wenonah_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/wenonah_front.jpg" width="250" height="250">'+
	  '<p><b>312 N. Wenonah St.</b><br>Four 1-bedroom Apartments<br>Rent: $350-$550/month<br>Status: <b>1 Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#wenonah">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var raymond_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/raymond_front.jpg" width="250" height="250">'+
	  '<p><b>106 Raymond St.</b><br>Two 1-bedrooms, One 2-Bedroom<br>Rent: $350-$550/month<br>Status: <b>None Available Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#raymond">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var schmit_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/schmit_front.jpg" width="250" height="250">'+
	  '<p><b>125 Schmit Court</b><br>Twelve 1-Bedroom Apartments<br>Rent: $350-$550/month<br>Status: <b>2 Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#schmit">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var auburn_house_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/auburn_midland_front.jpg" width="250" height="250">'+
	  '<p><b>229 W. Midland Rd. Auburn, MI</b><br>One 2-Bedroom, One 1-Bedroom<br>Rent: $350-$550/month<br>Status: <b>1 Bedroom Available</b><br>Pets: Not allowed</p>'+
	  /*'<p><a href="#auburn_house">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';
	  
	var auburn_house_small_info = '<div id="content">'+
	  '<div id="siteNotice">'+
	  '</div>'+
	  '<div id="bodyContent">'+
	  '<IMG BORDER="0" ALIGN="Left"<img style="margin-bottom: 10px;" src="./img/auburn_smallhouse.jpg" width="300" height="250">'+
	  '<p><b>229 ½ W. Midland Rd. Auburn, MI</b><br>Single Family House<br>Rent: $350-$550/month<br>Status: <b>Not Available</b><br>Pets: Not allowed</p>'+
	  /*'<p>/*<a href="#auburn_small_house">'+
	  'More Information</a></p>'+*/
	  '</div>'+
	  '</div>';



  var infowindow_union = new google.maps.InfoWindow({
      content: union_info
  });
  var infowindow_union2 = new google.maps.InfoWindow({
      content: union2_info
  });

  var infowindow_birney = new google.maps.InfoWindow({
      content: birney_info
  });
  var infowindow_madison = new google.maps.InfoWindow({
      content: madison_info
  });
  var infowindow_fitchu = new google.maps.InfoWindow({
      content: fitchu_info
  });
  var infowindow_webster = new google.maps.InfoWindow({
      content: webster_info
  });
  var infowindow_erie = new google.maps.InfoWindow({
      content: erie_info
  });
  var infowindow_erie_house = new google.maps.InfoWindow({
      content: erie_house_info
  });
  /*
  var infowindow_walnut = new google.maps.InfoWindow({
      content: walnut_info
  });
  */
  var infowindow_wenonah = new google.maps.InfoWindow({
      content: wenonah_info
  });
  var infowindow_raymond = new google.maps.InfoWindow({
      content: raymond_info
  });
  var infowindow_schmit = new google.maps.InfoWindow({
      content: schmit_info
  });
  var infowindow_auburn = new google.maps.InfoWindow({
      content: auburn_house_info
  });
  var infowindow_auburn_small = new google.maps.InfoWindow({
      content: auburn_house_small_info
  });




  var marker_union = new google.maps.Marker({
      position: nunion,
      map: map,
      title: '210 W. N. Union St.'
  });
  var marker_union2 = new google.maps.Marker({
      position: nunion2,
      map: map,
      title: '208 W. N. Union St.'
  });

  var marker_birney = new google.maps.Marker({
      position: birney,
      map: map,
      title: '400 N. Birney St.'
  });
  var marker_madison = new google.maps.Marker({
      position: madison,
      map: map,
      title: '223 N. Madison St.'
  });
  var marker_fitchu = new google.maps.Marker({
      position: fitchu,
      map: map,
      title: '207 Fitzhugh St.'
  });
  var marker_webster = new google.maps.Marker({
      position: webster,
      map: map,
      title: '1200 Webster St.'
  });
  var marker_erie = new google.maps.Marker({
      position: erie,
      map: map,
      title: '202 S. Erie St.'
  });
  var marker_erie_house = new google.maps.Marker({
      position: erie_house,
      map: map,
      title: '202 S. Erie St.'
  });
  /*
  var marker_walnut = new google.maps.Marker({
      position: walnut,
      map: map,
      title: '401 N. Walnut St.'
  });
  */
  var marker_wenonah = new google.maps.Marker({
      position: wenonah,
      map: map,
      title: '312 N. Wenonah St.'
  });
  var marker_raymond = new google.maps.Marker({
      position: raymond,
      map: map,
      title: '106 Raymond St.'
  });
  var marker_schmit = new google.maps.Marker({
      position: schmit,
      map: map,
      title: '125 Schmit Court. Auburn, MI '
  });
  var marker_auburn_house = new google.maps.Marker({
      position: auburn_house,
      map: map,
      title: '229 W. Midland Rd. Auburn, MI'
  });
  var marker_auburn_small= new google.maps.Marker({
      position: auburn_smallhouse,
      map: map,
      title: '229 ½ W. Midland Rd. Auburn, MI '
  });



  google.maps.event.addListener(marker_union, 'click', function() {
    infowindow_union.open(map,marker_union);
  });
  google.maps.event.addListener(marker_union2, 'click', function() {
    infowindow_union2.open(map,marker_union2);
  });

  google.maps.event.addListener(marker_birney, 'click', function() {
    infowindow_birney.open(map,marker_birney);
  });
  google.maps.event.addListener(marker_madison, 'click', function() {
    infowindow_madison.open(map,marker_madison);
  });
  google.maps.event.addListener(marker_fitchu, 'click', function() {
    infowindow_fitchu.open(map,marker_fitchu);
  });
  google.maps.event.addListener(marker_webster, 'click', function() {
    infowindow_webster.open(map,marker_webster);
  });
  google.maps.event.addListener(marker_erie, 'click', function() {
    infowindow_erie.open(map,marker_erie);
  });
  google.maps.event.addListener(marker_erie_house, 'click', function() {
    infowindow_erie_house.open(map,marker_erie_house);
  });
  /*
  google.maps.event.addListener(marker_walnut, 'click', function() {
    infowindow_walnut.open(map,marker_walnut);
  });
  */
  google.maps.event.addListener(marker_wenonah, 'click', function() {
    infowindow_wenonah.open(map,marker_wenonah);
  });
  google.maps.event.addListener(marker_raymond, 'click', function() {
    infowindow_raymond.open(map,marker_raymond);
  });
  google.maps.event.addListener(marker_schmit, 'click', function() {
    infowindow_schmit.open(map,marker_schmit);
  });
  google.maps.event.addListener(marker_auburn_house, 'click', function() {
    infowindow_auburn.open(map,marker_auburn_house);
  });
  google.maps.event.addListener(marker_auburn_small, 'click', function() {
    infowindow_auburn_small.open(map,marker_auburn_small);
  });
  
  



}

google.maps.event.addDomListener(window, 'load', initialize);

