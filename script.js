  //Burger-menu
  $(document).ready(function() {
	$('.burger-menu__inner').click(function(event) {
		$('.burger-menu__inner,.burger-menu,.navbar').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.burger-menu__inner.active').click(function(event) {
		$('.burger-menu__inner').toggleClass('');
	});
  });

  $("#kboard").on("click", "button", function(){
	var Tc = this.textContent;
	if(Tc.length===1) $("textarea").get(0).value += Tc;
  });

  $("#nubex").on("click", "button", function(){
	var Tc = this.textContent;
	if(Tc.length===1) $("textarea").get(0).value += Tc;
  });