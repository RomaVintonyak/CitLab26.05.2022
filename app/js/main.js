jQuery(document).ready(function () {
  "use script";
  /*burger btn*/
  var burgerBtn = $("#burgerBtn");
  burgerBtn.on("click", function (event) {
    event.preventDefault();
    $(this).toggleClass("burgerBtn--active");
  });
  /*post block*/
  var dropDownBtn = $(".drop__down--header");
  dropDownBtn.on("click", function () {
    $(this).toggleClass("header--active");
    $(this).parent(".drop__down").find(".drop__down--list").toggleClass("show__list");
  });
  /*news btn*/
  var newsBtn = $("#newsBtn");
  if($(".news__card").length > 6){
    newsBtn.addClass("news__btn--active");
  }else{
    newsBtn.removeClass("news__btn--active");
  }
});