$(document).ready(function(){

	var lowestPrice = Infinity,
		ul_list,
		index;
	for (var i = 0; i <= 15; i++) {

		price = $("li#result_" + i +" span.a-size-base").html();
		if (price) {
			//remove sign"$"
			price= price.slice(1);
			//remove"," and convert to number
			price = Number(price.replace(/,/g, ""));

			if (price < lowestPrice) {
				lowestPrice = price;
				ul_list = $("li#result_" + i);
				index = i;

			}

		}
	}
	$("ul#s-results-list-atf").prepend(ul_list);
	$("ul#s-results-list-atf").prepend(ul_list.clone());
	var newtitle = "Cheapest One: " + $("li#result_" + index + " h2.a-size-medium").html();
	$("li#result_" + index + " h2.a-size-medium").html(newtitle);

});