function main() {
  
  var colorClass = '';
  
  $('.select-color').on('click',  function() {
    var selectedColor = $(this).attr('class');
    switch (selectedColor) {
        case 'select-color cyan not-selected':
    colorClass = 'cyan';
    break;
  case 'select-color yellow not-selected':
    colorClass = 'yellow';
    break;
  case 'select-color magenta not-selected':
    colorClass = 'magenta';
    break;
  case 'select-color mediumblue not-selected':
    colorClass = 'mediumblue';
    break;
  case 'select-color limegreen not-selected':
    colorClass = 'limegreen';
    break;
  case 'select-color orangered not-selected':
    colorClass = 'orangered';
    break;
   };
    
  $(this).removeClass('not-selected');
  $(this).siblings().addClass('not-selected');
  });
  
  $('.box').on('click', function() {
    $(this).toggleClass(colorClass);
  });
  
  $('.toggle-blink').on('click', function() {
  if (colorClass) {
    $(this).toggleClass('opacity');
    setInterval(function() {
      $('.box.cyan, .box.yellow, .box.magenta, .box.mediumblue, .box.limegreen, .box.orangered').toggleClass('blink');
    }, 500);
  };

  });
  
  
}

$(document).ready(main);