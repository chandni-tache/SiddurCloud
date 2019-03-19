function initialize2() {

var options = {
  bounds: defaultBounds,
  types: ['geocode']
};

  var ac = new google.maps.places.Autocomplete(
    (document.getElementById('searchTextField')), {
      types: ['geocode']
    });

  ac.addListener('place_changed', function() {

    var place = ac.getPlace();

    var lat = place.geometry.location.lat();
    var long = place.geometry.location.lng();

    console.log(lat,long)

    if (!place.geometry) {

      // User entered the name of a Place that was not suggested and
      // pressed the Enter key, or the Place Details request failed.
      console.log("No details available for input: '" + place.name + "'");
      return;
    }

    console.log("You selected: '" + place.formatted_address + "'");
  });

  // Trigger search on blur
  google.maps.event.addDomListener(document.getElementById("searchTextField"), 'blur', function() {

    // Find the pac-container element
    var pacContainer = nextByClass(this, 'pac-container');

  

      google.maps.event.trigger(this, 'focus', {});
      google.maps.event.trigger(this, 'keydown', {
        keyCode: 13
      });
   

  });
}

function hasClass(elem, cls) {
  var str = " " + elem.className + " ";
  var testCls = " " + cls + " ";
  return (str.indexOf(testCls) != -1);
}

function nextByClass(node, cls) {
  while (node = node.nextSibling) {
    if (hasClass(node, cls)) {
      return node;
    }
  }
  return null;
}