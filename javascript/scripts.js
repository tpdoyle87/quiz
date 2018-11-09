$("#my-form").submit(function(event) {
  event.preventDefault();
  var form_data = $(this).serialize();
  var post_url = $(this).attr("action");
  var request_method = $(this).attr("method");
  console.log(form_data)
  $.ajax({
    url : post_url,
    type: request_method,
    data : form_data
  }).done(function(response){ //
    $("#server-results").html(response);
  });
})

