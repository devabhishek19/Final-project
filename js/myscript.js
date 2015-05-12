 // parallax scripting 

// $('.parallax-window').parallax({imageSrc: '/path/to/image.jpg'});

function initialize() {
  var myLatlng = new google.maps.LatLng(40.707952,-74.00666);
  var mapProp = {
    center: myLatlng,
    zoom:11,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"), mapProp);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Nycda'
  });
}
google.maps.event.addDomListener(window, 'load', initialize);

var counter = 0, // to keep track of current slide
    $items = $('.diy-slideshow figure'), // a collection of all of the slides, caching for performance
    numItems = $items.length; // total number of slides

// this function is what cycles the slides, showing the next or previous slide and hiding all the others
var showCurrent = function(){
    var itemToShow = Math.abs(counter%numItems);// uses remainder (aka modulo) operator to get the actual index of the element to show  
   
  $items.removeClass('show'); // remove .show from whichever element currently has it
  $items.eq(itemToShow).addClass('show');    
};

// add click events to prev & next buttons 
$('.next').on('click', function(){
    counter++;
    showCurrent(); 
});
$('.prev').on('click', function(){
    counter--;
    showCurrent(); 
});

// animate service.html blocks
// function rotation(){
$(document).ready(function(){
      $("#development").animate({left: '390px'},2000,function(){
        $("#development").animate({top: '+=239px',left: '-=390px'},2000,function(){
          $("#development").animate({top: '-=239px'},2000);
        });
      });
  })
//----- 
$(document).ready(function one(){
      $("#ratina").animate({right: '390px', top: '239px'},2000,function(){
        $(this).animate({top: '-=239px'},2000,function(){
          $(this).animate({right: '-=390px'},2000)
        });
      });
    });
  
// //-----
$(document).ready(function(){
      $("#modern").animate({top: '239px', right: '390px'},2000,function(){
        $("#modern").animate({right: '-=390px'},2000,function(){
          $("#modern").animate({top: '-=239px'},2000);
        });
      });
  });
// //---
$(document).ready(function(){
      $("#brand").animate({bottom: '239px'},2000,function(){
        $("#brand").animate({right: '390px'},2000,function(){
          $("#brand").animate({right: '-=390px',bottom: '-=239px'},2000);
        });
      });
  });
// //---
$(document).ready(function(){
      $("#client").animate({left: '390px'},2000,function(){
        $("#client").animate({bottom: '239px'},2000,function(){
          $("#client").animate({bottom: '-=239px',left: '-=390px'},2000);
        });
      });
  });
// //---
$(document).ready(function(){
    $("#social").animate({bottom: '239px'},2000,function(){
        $("#social").animate({bottom: '-=239px', left: '390px'},2000,function(){
          $("#social").animate({left: '-=390px'},2000);
        });

      });
  });


$(document).ready(function(){
  
  $('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  });

});
$(document).ready(function(){
    setInterval(function(){
        $('#testimonials .slide').filter(':visible').fadeOut(1000,function(){
            if($(this).next('.slide').size()){
                $(this).next().fadeIn(1000);
            }
            else{
                $('#testimonials .slide').eq(0).fadeIn(1000);
            }
        });
    },2500);    
}); 
// }


 // portfolio fancybox
 $(document).ready(function(){

  $('.lbox').on('click', function(){
    $('body').css("overflow", "hidden");
    var currentSource = $(this).attr("src");
    $("#enlarge").attr("src", currentSource);
    $("#lightBoxbg").css("display", "block");
    $("#lightBox").css("display", "block");

  });
// for fiding the box again
  $('.close').on('click', function(){
    $('body').css("overflow", "scroll");
    $("#lightBoxbg").css("display", "none");
    $("#lightBox").css("display", "none");
    
  });

 });

 // border effect on hovering over the readmore on portfolio

 $(document).ready(function(){
    $('.prt-btn').on('mouseenter',function(){
      $(this).css({"border": "1px solid black","backgroundColor": "black", "color": "white"});
    });
     $('.prt-btn').on('mouseleave',function(){
      $(this).css({"border": "none", "backgroundColor": "white", "color": "black"});
    });
 });

 // back to top
 $(window).scroll(function(){
  if($(window).scrollTop()>300){
    $('.bktt').fadeIn(1000);
  }
  else{
    $('.bktt').fadeOut(1000);
  }
 });

 $(function(){
  $('#bkt').on("click",function(){
    $('html, body').animate({"scrollTop": 0},1000);
    return false;
 });
 
 });



 

  

 
