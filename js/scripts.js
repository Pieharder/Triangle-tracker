$(document).ready(function() {
  $("form#triangleSides").submit(function(event) {
    event.preventDefault();
    var leg1 = parseInt($("input#leg1").val());
    var leg2 = parseInt($("input#leg2").val());
    var leg3 = parseInt($("input#leg3").val());
    console.log(leg1);
    console.log(leg2);
    console.log(leg3);
  if (isNaN(leg1) || isNaN(leg2) || isNaN(leg3)) {
    alert("please enter a number");
  } else if ((leg1 + leg2 <= leg3) || (leg2 + leg3 <= leg1) || (leg1 + leg3 <= leg2)) {
    $("#equilateral").hide();
    $("#isosceles").hide();
    $("#scalene").hide();
    $("#nat").show();
  } else if (leg1 === leg2 && leg2 === leg3) {
    $("#equilateral").show();
    $("#isosceles").hide();
    $("#scalene").hide();
    $("#nat").hide();
  } else if ((leg1 === leg2 && leg2 !== leg3) || (leg1 === leg3 && leg3 !== leg2)|| (leg2 === leg3 && leg3 !== leg1)) {
    $("#equilateral").hide();
    $("#isosceles").show();
    $("#scalene").hide();
    $("#nat").hide();
  } else if (leg1 !== leg2 && leg1 !== leg3 && leg2 !== leg3) {
    $("#equilateral").hide();
    $("#isosceles").hide();
    $("#scalene").show();
    $("#nat").hide();
} else {
  return(false)
}
    });
  });