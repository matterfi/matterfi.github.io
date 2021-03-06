$('#image-carousel').owlCarousel({
  navigation : false,
  pagination: true,
  items : 4,
  itemsDesktop : [1199,3],
  itemsDesktopSmall : [979,3]
});           

$('#posts-carousel').owlCarousel({
  navigation : true,
  pagination: true,
  items : 4,
  itemsDesktop : [1199,3],
  itemsDesktopSmall : [979,3]
});   

$('#posts-carousel').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
$('#posts-carousel').find('.owl-next').html('<i class="fa fa-angle-right"></i>'); 


$('#posts-carousel-3col').owlCarousel({
  navigation : true,
  pagination: false,
  items : 3,
  itemsDesktop : [1199,3],
  itemsDesktopSmall : [979,3]
});

$('#posts-carousel-3col').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
$('#posts-carousel-3col').find('.owl-next').html('<i class="fa fa-angle-right"></i>'); 

$('#image-slider').owlCarousel({
    navigation : true, // Show next and prev buttons
    slideSpeed : 600,
    paginationSpeed : 600,
    singleItem:true
});   
$('#image-slider').find('.owl-prev').html('<i class="fa fa-angle-left"></i>');
$('#image-slider').find('.owl-next').html('<i class="fa fa-angle-right"></i>');
