// Чтобы изменить метку терминала, необходимо подставить в terminalNumber 
// одно из двух значений ниже:
// "I_20" - терминал номер 1  (метка слева снизу)
// "I_7"  - терминал номер 2  (метка справа сбоку)

var terminalNumber = "I_20"; // Установлен терминал номер 1
var timeBeforeStop =  30;   // время возвращения в исходное состояние - дефолт 30 секунд

// эти переменные не трогать
var selectedMark = ""       // переменная для сохранения выбранной метки
var selectedMarkInterval;   // переменная анимации пульсации для иконки нахождения человека

window.onload = function () {

    if (terminalNumber == "I_20") {
        document.getElementById("I_6").style.display = "block";
        selectedMark = "I_6";
    }
    else {
        document.getElementById("I_55").style.display = "block";
        selectedMark = "I_55";
    }

    // интервал запускающий анимацию пульсации метки нахождения человека
    selectedMarkInterval = setInterval(function () {
        animate([selectedMark])
    }, 1800);
	
	// var object = document.getElementById('svg_plan-js');
	var svgDocument = document.getElementById('svg_plan-js');
	// var svgDocument  = object.contentDocument;
 	
    var btn = document.getElementsByClassName('menu__item')
    var animeTimer;
    var animeTimeout;
    var prevSelected;

    for (var i = 0; i < btn.length; i++) {
    	btn[i].addEventListener('click', function () {

    		if (prevSelected)
    			prevSelected.style.border = '1px solid transparent';

    		prevSelected = this.getElementsByClassName('meun-item__text')[0];
       		prevSelected.style.border = '1px solid red';
    		
    		var datasetValue = this.dataset.value;
    		var iconLink = this.dataset.icon;

    		var rightAssede = document.getElementsByClassName('asside__bg')[0];
    			rightAssede.style.background = "url('./images/" + iconLink + ".svg') no-repeat center center"
    			rightAssede.style.backgroundSize = "85% auto";

    		clearInterval(animeTimer);
    		clearTimeout(animeTimeout);

    		document.getElementById('O_Zone').style.opacity = "0";
    		document.getElementById('K_Zone').style.opacity = "0";

    		if ((datasetValue == 'ico-O_Zone') || (datasetValue == 'ico-K_Zone')) {
    			document.getElementById(datasetValue.replace('ico-', '')).style.opacity = "1";
    			animeTimeout = setTimeout(function () {
	    			document.getElementById('O_Zone').style.opacity = "0";
    				document.getElementById('K_Zone').style.opacity = "0";
    				clearBorder();
	    		}, timeBeforeStop * 1000)

    		} else {
    			var arr = getAppropriateArray(datasetValue);

	    		animate(arr)				
	    		animeTimer = setInterval(function () {
					animate(arr)
	    		}, 1800);

	    		animeTimeout = setTimeout(function () {
	    			clearInterval(animeTimer)
	    			clearBorder();



                    // интервал возобновляющий мигание стационарной кнопки нахождения человека
                    selectedMarkInterval = setInterval(function () {
                        animate([selectedMark])
                    }, 1800);
	    		}, timeBeforeStop * 1000)
    		}


            // при клике на элемент меню останавливаем мигание активного элемнта
            clearInterval(selectedMarkInterval);
	    })
    }

    // Реализация пульсации иконки
    function animate (arr) {
		resizeMarks(arr, false)
		setTimeout(function () {
			resizeMarks(arr, true)
		}, 800)
	}

	function clearBorder () {
		var menuElements = document.getElementsByClassName('meun-item__text');
		console.log("stoping animation")


		for (var i = 0; i < menuElements.length; i++) {
			var element = menuElements[i];
			element.style.border = '1px solid transparent';
		}
	}

	// Запускаю анимацию для иконки терминала	
	// setInterval(function () {
	// 	animate([terminalNumber])
	// }, 1800);

	// Реализация изменения размера иконки относительно ее позиции, а также замена цвета обводки 
    function resizeMarks (elements, diselect) {
    	for (var i = 0; i < elements.length; i++) {
    		var elementId = elements[i];
		    var scalingValue = (diselect) ? 1 : (elementId.includes("R_")) ? 1.3 : 3;

		    var smallGroup = document.getElementById(elementId);
		    // console.log(elementId)
		    var canvasBbox = document.querySelector("#" + elementId).getBBox()
		    var cx = canvasBbox.x + canvasBbox.width/2;
			var cy = canvasBbox.y + canvasBbox.height/2;
			var x = -cx * (scalingValue- 1)
			var y = -cy * (scalingValue - 1)

			smallGroup.style.transform = "translate("+x+"px, "+y+"px) scale(" + scalingValue + ")"

			if (!diselect) {
				if (elementId.includes("R_")) {
					if (document.getElementById(elementId+'_b'))
						document.getElementById(elementId+'_b').style.stroke = "red";
				} else {
					if (document.getElementById(elementId+'_b'))
						document.getElementById(elementId+'_b').style.fill = "red";
				}
					
			} else {
				if (elementId.includes("R_")) {
					if (document.getElementById(elementId+'_b'))
						document.getElementById(elementId+'_b').style.stroke = "black";
				} else {
					if (document.getElementById(elementId+'_b'))
						document.getElementById(elementId+'_b').style.fill = "black";
				}
			}
    	}
    }

    function getAppropriateArray (title) {
    	var thisArray = [];

    	switch (title) {
    		case "ico-peregovory_01_11":
    			for (var i = 1; i <= 10; i++)
    				// if (i <= 9)
    				// 	thisArray.push("B_0" + i)
    				// else
    				// 	thisArray.push("B_" + i)

                    thisArray.push("B_01", "B_02", "B_03", "B_04", "B_05", "B_06", "B_07", "B_08", "B_09", "B_11")
    			break;

    		case "ico-peregovory_16_36":
    			for (var i = 16; i <= 36; i++)
    				thisArray.push("D_" + i)
    			break;

    		case "ico-demon":
    			thisArray.push("I_24")
    			break;

    		case "ico-ochered":
    			thisArray.push("I_21", "I_23", "I_22", "I_51")
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
    			thisArray.push("I_19", "I_17", "I_16", "I_15", "I_18")
    			break;

    		case "ico-window_1_4":
    			thisArray.push("R_1", "R_2", "R_3", "R_4", "I_25")
    			break;

			case "ico-window_5_7":
    			thisArray.push("R_5", "R_6", "R_7", "I_3")
    			break;

    		case "ico-window_8_12":
    			thisArray.push("B_10", "B_12", "B_13", "B_14", "B_15")
    			break;

    		case "ico-window_13_29":
    			thisArray.push("R_13", "R_14", "R_15", "R_16", "R_17", "R_18", "R_19", "R_20", "R_21", "R_22", 
    						   "R_28", "R_29", "I_12", "I_8", "I_9", "I_10", "I_14", "I_2", "I_4", "I_5")
    			break;

    		case "ico-notarius":
    			thisArray.push("B_12", "B_13", "B_14", "B_15")
    			break;

    		case "ico-agent":
    			thisArray.push("B_10")
    			break;

    		case "ico-bank":
    			thisArray.push("I_11")
    			break;

    		case "ico-obslugivanie_bank_schetov":
    			thisArray.push("I_3", "R_5", "R_6", "R_7")
    			break;
    	}

    	return thisArray;
    }
}


window.addEventListener('touchstart', function(e) {
  if (e.targetTouches.length === 2) {
    e.preventDefault();
  }
}, false);


// нотариус
// регистрационный агент
// Обслуживание банковских счетов
// банкоматы
// ico-reception					I_25
// ico-demon						I_24 //
// ico-nav							I_20 I_7
// ico-ochered						I_21 I_22 I_23//
// ico-notarius						"B_12", "B_12", "B_14", "B_15"
// ico-agent						"B_10"
// ico-peregovory_16_36    			D_16-D_36//
// ico-obslugivanie_bank_schetov	I_3 + 3 окна
// ico-deposit						I_12//
// ico-o_zone 						o_zone
// ico-kassy						I_8 I_9 I_10 I_14//
// ico-bank 						I_11
// ico-k_zone						k_zone
// ico-espressobar					bar//
// ico-childrencorner				I_27//
// ico-kolasochnaya					I_13//
// ico-pelenalnaya					I_26//
// ico-toilet						I_19 I_17//		