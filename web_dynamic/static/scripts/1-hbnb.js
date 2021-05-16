const $ = window.$;
$(document).ready(function () {
  const listcheck = [];
  $('.checkbox_amenities').click(function () {
    const amenity_id = $(this).data('id');
    if (listcheck.includes(amenity_id)) {
      const index = listcheck.indexOf(amenity_id);
      if (index !== -1) {
        listcheck.splice(index, 1);
      } else {
        listcheck.push(amenity_id);
      }
      console.log(listcheck);
    }
  });
});
