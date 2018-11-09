$("#my-form").submit(function(event) {
  event.preventDefault();
  let form_data = $(this).serializeArray();
  const data = {}
  $(form_data).each(function(index, obj){
    data[obj.name] = obj.value;
  })
  const post_url = $(this).attr("action");
  const request_method = $(this).attr("method");
  console.log("this is here to see the strinified data")
  console.log(JSON.stringify(data))
  $.ajax({
    url : post_url,
    type: request_method,
    data : JSON.stringify(data)
  }).done(function(response){ //
    $("#server-results").html(response);
  });
  $("#my-form").trigger("reset")
})
