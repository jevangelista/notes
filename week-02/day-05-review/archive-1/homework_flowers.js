$(document).ready(function(){    
  var flowerTemplate = _.template($('#flower-template').html());
    vase.flowers.forEach(function(arrayHTML) {
        var dahliaHTML = flowerTemplate(arrayHTML);
        $('#flower-placeholder').append(dahliaHTML);
    });
});

