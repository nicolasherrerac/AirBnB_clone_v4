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
});
