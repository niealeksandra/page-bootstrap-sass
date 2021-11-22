$(document).ready(function(){
	$('#navmenu--button').click(function(){
		$('#nav-icon').toggleClass('open');
  });
  
  $('#form-select').change(function(){
    $(this).addClass('option-grey');
  })


  const formItems = $('.form-item');
  
  formItems.each(function() {
    const field = $(this);
    const input = field.find('.input-field');
    const span = field.find('span');

    
    function checkInput() {
      const valueLength = input.val().length;
      
      if (valueLength > 0 ) {
        span.addClass('float-span')
      } else {
        span.removeClass('float-span')
      }
    }
    
    input.change(function() {
      checkInput()
    })
  });

});

