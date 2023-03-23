$(document).ready(function() {
    $.getJSON('menu.json', function(data) {
      var menuItems = '';
  
      $.each(data.menu, function(key, val) {
        var subMenu = '';
  
        if (val.subMenu) {
          $.each(val.subMenu, function(subKey, subVal) {
            subMenu += '<li><a href="' + subVal.url + '">' + subVal.name + '</a></li>';
          });
          subMenu = '<ul class="sub-menu">' + subMenu + '</ul>';
        }
  
        menuItems += '<li><a href="' + val.url + '">' + val.name + '</a>' + subMenu + '</li>';
      });
  
      $('#menu').append(menuItems);
    });
  });
  