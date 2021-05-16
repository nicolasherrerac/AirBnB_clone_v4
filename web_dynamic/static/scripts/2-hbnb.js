const $ = window.$;
$(function(){
  const URL = 'http://0.0.0.0:5001/api/v1/status/';
  $.get(URL, function (data, status) {
    if (status === 200) {
      $('#api_status').addClass('available');
    }
    else {
      $('#api_status').removeClass('available');
    }
  });
  
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


