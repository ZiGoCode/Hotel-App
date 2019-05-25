// (function ($) {
//   'use strict';
//   $(function () {
//     $('[data-toggle="offcanvas"]').on("click", function () {
//       $('.sidebar-offcanvas').toggleClass('active')
//     });
//   });
// })(jQuery);

'use strict';
var Apptoggle = {
  toggleClass: function () {
    $('[data-toggle="offcanvas"]').on("click", function () {
      $('.sidebar-offcanvas').toggleClass('active')
    });
    console.log('toggleClass');
  }
}