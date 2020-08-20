$(function () {
  $("#contact-form").submit(function (e) {
    e.preventDefault();
    $(".comments").empty();
    var postdata = $("#contact-form").serialize();

    $.ajax({
      type: "POST",
      url: "php/contact.php",
      data: postdata,
      datatype: "json",
      success: function (json) {
        if (json.isSuccess) {
          $("contact-form").append(
            '<p class="thank-you">Votre message a bien été envoyé.</p>'
          );
          $("contact-form")[0].reset();
        } else {
          $("#firstname + .comments").html(json.firstnameError);
          $("#name + .comments").html(json.nameError);
          $("#email + .comments").html(json.emailError);
          $("#phone + .comments").html(json.phoneError);
          $("#message + .comments").html(json.messageError);
        }
      },
    });
  });
});