$(document).ready(function(){
    
    //Toggle Menu 
    
$('.hamburger').click(function(){
    $('.nav-links').toggleClass('open');
});
    
    
    //Count Of Statistics
    
    $(window).scroll(function(){
        var state=$('.statistics');
        var stop =$(window).scrollTop();
        var statetop=state.offset().top;
        var winh =$(window).height();
        
        
        if(stop >=statetop - winh + 150){
            $('.count').countTo();
            $(window).off('scroll');
        }
        
    });
    
    //Filter Portfolio 
    
    $('.filter-group ul li').click(function(){
        
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    var config =$('.Filter');
    var mixer = mixitup(config);
    
     // Show And Hide Buttom Back To Top
    
    var scrollup = $('.scroll-up');
    
    $(window).scroll(function(){
        if($(window).scrollTop() >=500){
            scrollup.show(500);
        }else{
            scrollup.hide(500);
        }     
    });
    
    // Back To 0 Scroll Top body
    var scrollup = $('.scroll-up');
        
    scrollup.click(function(){
        
        $('html,body').animate({
            scrollTop:0
        },1000);
    });
    
    //Scroll To Section
    $('.menu-link').click(function(e){
       
       e.preventDefault();

    $('body,html').animate({
      scrollTop: $('#' + $(this).data('scroll')).offset().top
    },1000);
    $(this).parent().addClass('b-active').siblings().removeClass('b-active');
  });
        
    
});


//Spinner Loading When Window Is Loading

$(window).on('load',function(){
    $('.spinner').fadeOut(2000,function(){
        $('.loading').fadeIn(5000);
    });
});