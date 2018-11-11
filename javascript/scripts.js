// form submission
$("#my-form").submit(function(event) {
  event.preventDefault();
  const form_data = $(this).serializeArray();
  const data = {}
 // changes the data into a form we want
  $(form_data).each(function(index, obj){
    data[obj.name] = obj.value;
  })
  const post_url = $(this).attr("action");
  const request_method = $(this).attr("method");
  // ajax request to the server passing our data in JSON format
  $.ajax({
    url : post_url,
    type: request_method,
    data : JSON.stringify(data),
    success: function(response) {
      alert("Successfully saved")
    }
  })
  // blanks the form
  $("#my-form").trigger("reset");
});

// Formats the phone number and checks the number of digits

$("#phone").mask('(999) 999-9999');


