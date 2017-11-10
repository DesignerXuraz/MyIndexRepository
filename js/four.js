$(document).ready(function(){

	//FOR TOP MENU
	$(".menu .toggle-bar").click(function(){
		$(".menu ul").slideToggle(500);
	});



	//FOR STICKY HEADER
	$(window).scroll(function(){
		if($(this).scrollTop()>150 ){
			$(".menu").addClass("sticky");
		}else{
			$(".menu").removeClass("sticky");
		}
	});

//FOR BUTTON THAT TAKES USER TO TOP
	$("#top").click(function(){
		$("html,body").animate({scrollTop:0},2000);
	});

	//FOR THE MENU LINKS//

	$(".menu a").click(function(event){
		if(this.hash !==""){
			event.preventDefault();

			var hash = this.hash;

			$("html,body").animate({
				scrollTop: $(hash).offset().top
			},900,function(){

				window.location.hash = hash;
			});
		}
	});

	//FOR FORM
	$("li.fields").filter(":nth-child(n+4)").addClass("hide");
	$('ul').on('click','li.title',function(){
		$(this).next().slideDown(200).siblings("li.fields").slideUp(200);
	});


	//FOR READ MORE LINKS
	$("#btn").hide();
	$("#para").hide();
	$("#showBtn").click(function(){
		$("#para").show();
		$("#showBtn").hide();
		$("#btn").show();
	});

	$("#btn").click(function(){
		$("#para").hide();
		$("#showBtn").show();
		$("#btn").hide();
	});
	
});