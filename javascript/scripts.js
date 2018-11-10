$("#my-form").submit(function(event) {
  event.preventDefault();
  let form_data = $(this).serializeArray();
  const data = {}
  $(form_data).each(function(index, obj){
    data[obj.name] = obj.value;
  })
  const post_url = $(this).attr("action");
  const request_method = $(this).attr("method");
  $.ajax({
    url : post_url,
    type: request_method,
    data : JSON.stringify(data),
    success: function(response) {
      alert("Successfully saved")
      console.log(response)
    }
  })
  $("#my-form").trigger("reset")
});
