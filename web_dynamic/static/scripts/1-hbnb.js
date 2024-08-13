$(document).ready(function() {
  var amenityIds = {};

  $('input[type="checkbox"]').on('change', function() {
    var amenityId = $(this).data('id');
    var amenityName = $(this).data('name');

    if ($(this).prop('checked')) {
      amenityIds[amenityId] = amenityName;
    } else {
      delete amenityIds[amenityId];
    }

    var amenitiesList = Object.values(amenityIds).join(', ');
    $('#amenities-list').text(amenitiesList);
  });
});
