const $ = window.$;
$(function(){
  const URL = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(URL, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    }
    else {
      $('#api_status').removeClass('available');
    }
  });

  const post_url = 'http://0.0.0.0:5001/api/v1/places_search/';
  $.ajax({
		type: 'POST',
		url: post_url,
		data: {},
		dataType : 'json',
		contentType: 'application/json',
		success: (data) => {
      data.forEach( (place) => {
        let article =
        `<article>
          <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${ place.max_guest } Guest</div>
            <div class="number_rooms">${ place.number_rooms } Bedroom</div>
            <div class="number_bathrooms">${ place.number_bathrooms } Bathroom</div>
          </div>
          <div class="description">${ place.description }</div>
        </article>`
        $(SECTION.places).append(article);
      });
		},
  })
  
  const listcheck = [];
  $('.checkbox_amenities').click(function () {
    let amenity_id = $(this).data('id');
    if (listcheck.includes(amenity_id)) {
      let index = listcheck.indexOf(amenity_id);
      if (index !== -1) {
        listcheck.splice(index, 1);
      }
      else {
        listcheck.push(amenity_id);
      }
      console.log(listcheck);
    }
  });
});
