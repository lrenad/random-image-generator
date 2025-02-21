var iconImg; 
var pictures = [ "CPE", "EPT", "GPP", "GUI", "PERF", "PORT", "SEO" ];
var descriptions = [ "Common Programming Error", 
   "Error-Prevention Tip", "Good Programming Practice", 
   "Look-and-Feel Observation", "Performance Tip", "Portability Tip", 
   "Software Engineering Observation" ];

function pickImage()
   {
      var index = Math.floor( Math.random() * 7 );
      iconImg.setAttribute( "src", pictures[ index ] + ".png" );
      iconImg.setAttribute( "alt", descriptions[ index ] );
   } // end function pickImage

function start()
   {
      iconImg = document.getElementById( "image" );
      iconImg.addEventListener( "click", pickImage, false );
   } // end function start
   
window.addEventListener( "load", start, false );
