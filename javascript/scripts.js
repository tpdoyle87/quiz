$("#my-form").submit(function(event) {
  event.preventDefault();
  let form_data = $(this).serializeArray();
  const data = {}
  $(form_data).each(function(index, obj){
    data[obj.name] = obj.value;
  })
  const post_url = $(this).attr("action");
  const request_method = $(this).attr("method");
  console.log(data)
  $.ajax({
    url : post_url,
    type: request_method,
    data : data
  }).done(function(response){ //
    $("#server-results").html(response);
  });
})

var formdata = $("#myform").serializeArray();
var data = {};
$(formdata ).each(function(index, obj){
    data[obj.name] = obj.value;
});
