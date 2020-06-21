window.onload = function () {
	
 	var svg = document.getElementById('object');
    console.log(svg);


    var btn = document.getElementsByClassName('menu__item')[0]

    btn.addEventListener('click', function () {
    	console.log('hello')

    	var svgRect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

		svgRect.setAttributeNS(null, "x", Math.random() * 100);
		svgRect.setAttributeNS(null, "y", Math.random() * 100);
		svgRect.setAttributeNS(null, "width", 50);
		svgRect.setAttributeNS(null, "height", 50);
		svgRect.setAttributeNS(null, "fill", "darkblue");

		// document.querySelector("svg").appendChild(svgRect);

		var ic = document.getElementById('icon-1');
		console.log(ic)
		document.querySelector("svg").appendChild(ic)

    })

}

