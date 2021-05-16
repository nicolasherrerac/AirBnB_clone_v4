const $ = window.$;
$(function () {
  const listcheck = [];
  $('.checkbox_amenities').click(function () {
    const amenityId = $(this).data('id');
    if (listcheck.includes(amenityId)) {
      const index = listcheck.indexOf(amenityId);
      if (index !== -1) {
        listcheck.splice(index, 1);
      } else {
        listcheck.push(amenityId);
      }
      console.log(listcheck);
    }
  });

  const URL = 'http://'+ window.location.hostname +':5001/api/v1/status/';
  $.get(URL, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });

  const postUrl = 'http://'+ window.location.hostname +':5001/api/v1/places_search/';
  $.ajax({
    type: 'POST',
    url: postUrl,
    data: {},
    dataType: 'json',
    contentType: 'application/json',
    success: (data) => {
      data.forEach((place) => {
        const article = `<article>
          <div class="title_box">
            <h2>${place.name}</h2>
            <div class="price_by_night">${place.price_by_night}</div>
          </div>
          <div class="information">
            <div class="max_guest">${place.max_guest} Guest</div>
            <div class="number_rooms">${place.number_rooms} Bedroom</div>
            <div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
          </div>
          <div class="description">${place.description}</div>
        </article>`;
        $('SECTION.places').append(article);
      });
    }
  });

  $('button').click(function () {
    const postUrl = 'http://'+ window.location.hostname +':5001/api/v1/places_search/';
    const amenityKeys = JSON.stringify(Object.keys(listcheck));
    $.ajax({
      type: 'POST',
      url: postUrl,
      data: amenityKeys,
      dataType: 'json',
      contentType: 'application/json',
      success: (data) => {
        data.forEach((place) => {
          const article = `<article>
						<div class="title_box">
							<h2>${place.name}</h2>
							<div class="price_by_night">${place.price_by_night}</div>
						</div>
						<div class="information">
							<div class="max_guest">${place.max_guest} Guest</div>
							<div class="number_rooms">${place.number_rooms} Bedroom</div>
							<div class="number_bathrooms">${place.number_bathrooms} Bathroom</div>
						</div>
						<div class="description">${place.description}</div>
					</article>`;
          $('SECTION.places').append(article);
        });
      }
    });
  });
});
