//Code By Webdevtrick ( https://webdevtrick.com ) 
$ = jQuery;
$( document ).ready(function() {
  
  $h_slider_options =  {
      gallery: true,
      item: 1,
      loop:false,
      slideMargin: 0,
      thumbItem: 6,
      galleryMargin: 10,
      thumbMargin: 10,
      }; 
 
  $v_slider_options = {
      gallery: true,
      item: 1,
      loop:false,
      slideMargin: 0,
      thumbItem: 6,
      galleryMargin: 10,
      thumbMargin: 10,
      vertical: true
  };
 
  h_slider = $('#lightSlider').lightSlider($h_slider_options);
  v_slider = $('#lightSliderVertical').lightSlider($v_slider_options);
 
  $selector = '#lightSlider li:not(".clone") a';
  $selector += ',#lightSliderVertical li:not(".clone") a';
  $().fancybox({
    selector : $selector,
    backFocus : false, 
    buttons : [ 
      'slideShow',
      'share',
      'zoom',
      'fullScreen',
      'thumbs',
      'download',
      'close'
    ]
  });
});
 
$( window ).resize(function() {
 slider.destroy();
 h_slider = $('#ocassions-slider').lightSlider(h_slider_options);
});

const altTitle = document.querySelector('title').innerText 

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const lsGallery = document.querySelectorAll('.lSGallery li img')

        lsGallery.forEach(lsGalleryImage => {
            lsGalleryImage.setAttribute('alt', altTitle)
            lsGalleryImage.setAttribute('title', altTitle)
        })
    }, 100)
})