const $ = window.$;
$(function () {
  const listcheck = [];
  $('.checkbox_amenities').click(function () {
    const amenityId = $(this).data('id');
    if (listcheck.includes(amenityId)) {
      const index = listcheck.indexOf(amenityId);
      if (index !== -1) {
        listcheck.splice(index, 1);
      }
    } else {
      listcheck.push(amenityId);
    }
  });

  const URL = 'http://' + window.location.hostname + ':5001/api/v1/status/';
  $.get(URL, function (data) {
    if (data.status === 'OK') {
      $('#api_status').addClass('available');
    } else {
      $('#api_status').removeClass('available');
    }
  });
});
