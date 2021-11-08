$(".nav_menu a, .upclose a").on('click', function (event) {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').stop().animate({
                scrollTop: $(hash).offset().top - 130
            }, 800);

        });

// $('.body').scroll(function(){
// 	let display_none = '45555';
// 	console.log(display_none);
// });


// window.onbeforeunload = function () 
// 	{
// 		window.scrollTo(0, 0);
// 	}
// window.onscroll = function() {changeBg()};
// function changeBg() 
//    	{
// 		let display_none = document.querySelector('.display_none');
// 		if (document.body.scrollTop) 
// 			{
// 				display_none.classList.add('upclose');
// 			} 
// 		else 
// 			{
// 				display_none.classList.remove('upclose');
// 			}
// 	}
// $('a[href="#section0"]').click(function()
// 		{
// 			$('html, body').animate({scrollTop:0}, 'slow');
// 			return false;
// 		})
