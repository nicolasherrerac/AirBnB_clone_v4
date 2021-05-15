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
});