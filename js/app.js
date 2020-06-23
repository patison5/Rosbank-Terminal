window.onload = function () {


	// var object = document.getElementById('svg_plan-js');
	var svgDocument = document.getElementById('svg_plan-js');
	// var svgDocument  = object.contentDocument;
 	
    var btn = document.getElementsByClassName('menu__item')


    for (var i = 0; i < btn.length; i++) {
    	btn[i].addEventListener('click', function () {
    		
    		var datasetValue = this.dataset.value;
    		var iconLink = this.dataset.icon;

    		var rightAssede = document.getElementsByClassName('asside__bg')[0];
    			rightAssede.style.background = "url('./images/" + iconLink + ".svg') no-repeat center center"
    			rightAssede.style.backgroundSize = "85% auto";

    		console.log(iconLink)

    		// svgDocument.classList.add(datasetValue);

    		resizeMarks(getAppropriateArray(datasetValue), 2, false)

    		setTimeout(function () {
    			resizeMarks(getAppropriateArray(datasetValue), 1, true)
    			console.log('he')
    		}, 2000)
	    })
    }


    var array = ["B_01", "B_02", "B_03"]



    function resizeMarks (elements, scale, diselect) {

    	for (var i = 0; i < elements.length; i++) {
    		var elementId = elements[i];
		    var scalingValue = scale;
		    var smallGroup = document.getElementById(elementId);
		    console.log(elementId)
		    var canvasBbox = document.querySelector("#" + elementId).getBBox()
		    var cx = canvasBbox.x + canvasBbox.width/2;
			var cy = canvasBbox.y + canvasBbox.height/2;
			var x = -cx * (scalingValue- 1)
			var y = -cy * (scalingValue - 1)

			smallGroup.style.transform = "translate("+x+"px, "+y+"px) scale(" + scalingValue + ")"

			if (!diselect) {
				if (document.getElementById(elementId+'_b'))
					document.getElementById(elementId+'_b').style.fill = "red";
			} else {
				if (document.getElementById(elementId+'_b'))
					document.getElementById(elementId+'_b').style.fill = "black";
			}
    	}
    }

    function getAppropriateArray (title) {
    	var thisArray = [];

    	switch (title) {
    		case "ico-peregovory_01_11":
    			for (var i = 1; i <= 11; i++)
    				if (i <= 9)
    					thisArray.push("B_0" + i)
    				else
    					thisArray.push("B_" + i)
    			break;

    		case "ico-peregovory_16_36":
    			for (var i = 16; i <= 36; i++)
    				thisArray.push("D_" + i)
    			break;

    		case "ico-demon":
    			thisArray.push("I_24")
    			break;

    		case "ico-ochered":
    			thisArray.push("I_21", "I_23")
    			break;

    		case "ico-kassy":
    			thisArray.push("I_8", "I_9", "I_10", "I_14")
    			break;

    		case "ico-nav":
    			thisArray.push("I_20", "I_7")
    			break;

    		case "ico-reception":
    			thisArray.push("I_25")
    			break;

    		case "ico-deposit":
    			thisArray.push("I_12")
    			break;

    		case "ico-espressobar":
    			thisArray.push("Bar")
    			break;

    		case "ico-childrencorner":
    			thisArray.push("I_27")
    			break;

    		case "ico-kolasochnaya":
    			thisArray.push("I_13")
    			break;

    		case "ico-pelenalnaya":
    			thisArray.push("I_26")
    			break;

    		case "ico-toilet":
    			thisArray.push("I_19", "I_17")
    			break;

    		case "ico-window_1_4":
    			thisArray.push("R_1", "R_2", "R_3", "R_4")
    			break;

			case "ico-window_5_7":
    			thisArray.push("R_5", "R_6", "R_7")
    			break;

    		case "ico-window_8_12":
    			thisArray.push("B_10", "B_12", "B_13", "B_14", "B_15")
    			break;
    	}

    	return thisArray;
    }
}


// нотариус
// регистрационный агент
// Обслуживание банковских счетов
// банкоматы


// ico-reception			I_25
// ico-demon				I_24 //
// ico-nav					I_20 I_7
// ico-ochered				I_21 I_23//
// ico-blank
// ico-blank
// ico-blank
// ico-blank
// ico-notarius
// ico-agent
// ico-peregovory_01_11
// ico-peregovory_16_36    D_16-D_36//
// ico-blank
// ico-deposit				I_12//
// ico-blank
// ico-kassy				I_8 I_9 I_10 I_14//
// ico-blank
// ico-blank
// ico-espressobar			bar//
// ico-childrencorner		I_27//
// ico-kolasochnaya		I_13//
// ico-pelenalnaya			I_26//
// ico-toilet				I_19 I_17//