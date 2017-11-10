/*FOR BUTTON THAT TAKES USER TO THE TOP*/
function yscroll(){
			var top = document.getElementById("top");
			var yPos = window.pageYOffset;
				if(yPos > 150){
				top.style.transition = "right 0.5s ease-in-out 0s";
				top.style.right="0px";
			}else{
				top.style.transition = "right 0.5s ease-in-out 0s";
				top.style.right="-90px";
			}
		}


		window.onscroll=yscroll;