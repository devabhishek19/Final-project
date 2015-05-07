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
// }

// $(document).ready(function(){
//   $("#boxes").mouseenter(function(){
//      rotation(); 
//   });
// })

 // portfolio fancybox
 
