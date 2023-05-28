$(document).ready(function() { // Ready this at the start of the document
	var count = 0;	
	var type1 = "";
	var type2 = "";
	var typeData = [
		{
			name: "Normal",
			immunes: ["Ghost"],
			weaknesses: ["Fighting"],
			resists: []
		},
		{
			name: "Fighting",
			immunes: [],
			weaknesses: ["Flying", "Psychic", "Fairy"],
			resists: ["Rock", "Dark"]
		},
		{
			name: "Flying",
			immunes: ["Ground"],
			weaknesses: ["Rock", "Electric", "Ice"],
			resists: ["Fighting", "Bug"]
		},
		{
			name: "Poison",
			immunes: [],
			weaknesses: ["Ground", "Psychic"],
			resists: ["Fighting", "Poison", "Bug", "Fairy"]
		},
		{
			name: "Ground",
			immunes: ["Electric"],
			weaknesses: ["Water", "Grass", "Ice", "Cosmic"],
			resists: ["Poison", "Rock"]
		},
		{
			name: "Rock",
			immunes: [],
			weaknesses: ["Fighting", "Ground", "Water", "Grass"],
			resists: ["Normal", "Flying", "Poison", "Fire"]
		},
		{
			name: "Bug",
			immunes: [],
			weaknesses: ["Flying", "Rock", "Fire"],
			resists: ["Fighting", "Ground", "Grass", "Psychic"]
		},
		{
			name: "Ghost",
			immunes: ["Normal", "Fighting"],
			weaknesses: ["Ghost", "Dark"],
			resists: ["Poison", "Bug"]
		},
		{
			name: "Steel",
			immunes: ["Poison"],
			weaknesses: ["Fighting", "Ground", "Fire"],
			resists: ["Normal", "Flying", "Rock", "Steel", "Grass", "Psychic", "Ice", "Dragon", "Fairy", "Virtual"]
		},
		{
			name: "Fire",
			immunes: [],
			weaknesses: ["Flying", "Rock", "Water"],
			resists: ["Bug", "Steel", "Fire", "Grass", "Fairy", "Cosmic"]
		},
		{
			name: "Water",
			immunes: [],
			weaknesses: ["Poison", "Grass", "Electric"],
			resists: ["Steel", "Fire", "Water", "Ice"]
		},
		{
			name: "Grass",
			immunes: [],
			weaknesses: ["Poison", "Bug", "Fire", "Ice"],
			resists: ["Ground", "Water", "Grass", "Electric"]			
		},
		{
			name: "Electric",
			immunes: [],
			weaknesses: ["Ground", "Virtual"],
			resists: ["Flying", "Steel", "Electric"]
		},
		{
			name: "Psychic",
			immunes: [],
			weaknesses: ["Bug", "Ghost", "Dark", "Cosmic"],
			resists: ["Fighting", "Psychic"]
		},
		{
			name: "Ice",
			immunes: [],
			weaknesses: ["Fighting", "Rock", "Steel"],
			resists: ["Flying", "Water", "Ice"]
		},
		{
			name: "Dragon",
			immunes: [],
			weaknesses: ["Ice", "Dragon", "Fairy"],
			resists: ["Fire", "Water", "Grass", "Electric", "Cosmic", "Virtual"]
		},
		{
			name: "Dark",
			immunes: ["Psychic"],
			weaknesses: ["Fighting", "Bug", "Fairy"],
			resists: ["Ghost", "Dark", "Cosmic"]
		},
		{
			name: "Fairy",
			immunes: ["Dragon"],
			weaknesses: ["Poison", "Steel", "Virtual"],
			resists: ["Fighting", "Dark"]
		},
		{
			name: "Cosmic",
			immunes: [],
			weaknesses: ["Flying", "Fire", "Dark"],
			resists: ["Fighting", "Ground", "Electric", "Fairy", "Virtual"]
		},
		{
			name: "Virtual",
			immunes: [],
			weaknesses: ["Bug", "Water"],
			resists: ["Poison", "Cosmic"]
		},
		{
			name: "Void",
			immunes: ["Void"],
			weaknesses: [],
			resists: []
		}
	];

	var typeCalculation = {};

	$.each(typeData, function(i, v) {
		$("#ui-container").append(
			'<button class="' + v.name + '" id="' + i + '">' + v.name + "</button>"
		);
		typeCalculation[v.name] = 1;
	});

	function clearTypeCalc() { // clear both types
		for (var i in typeCalculation) {
			typeCalculation[i] = 1;
		}

		type1 = "";
		type2 = "";
		$("#currentType").html("");
	}

	$("button").click(function() {
		var type = parseInt($(this).attr("id")), // parse the id of the button as an integer
			swvalues = typeData.slice(type, type + 1);
		if (type1 == "") {
			type1 = swvalues[0].name; // if type is none, type is the name associated with the ID
			numerizeData(swvalues);
		} else if (type2 == "") {
			type2 = swvalues[0].name; // if type is none, type is the name associated with the ID
			numerizeData(swvalues);
		} else if (type1 !== "" && type2 !== "") { // if both types are full,
			clearTypeCalc();
			type1 = swvalues[0].name; // type 1 is replaced
			type2 = "";				  // clear type 2
			numerizeData(swvalues);
		}
		$("#currentType").html(
			'<div class="tag ' +
				type1 +
				'">' +
				type1 +
				'</div><div class="tag ' +
				type2 +
				'">' +
				type2 +
				"</div>"
		);
	});

	function numerizeData(swv) {
		$.each(swv[0].immunes, function(i, val) { // multiply every immune by 0
			console.log(val);
			typeCalculation[val] = typeCalculation[val] * 0;
		});
		$.each(swv[0].resists, function(i, val) { // multiply every resist by 2?????
			typeCalculation[val] = typeCalculation[val] * 2;
		});
		$.each(swv[0].weaknesses, function(i, val) { // multiply every weakness by 0.5?????
			typeCalculation[val] = typeCalculation[val] * 0.5;
		});
		console.log(typeCalculation);
		displayResults();
	}

	function displayResults() {
		$("#results > div").html("");
		$.each(typeCalculation, function(key, value) {
			var tHtml = $('<div class="' + key + ' tag">' + key + "</div>");
			if (value === 0) {
				$("#immune").append(tHtml);
			} else if (value === 0.25) {
				$("#superWeak").append(tHtml);
			} else if (value === 0.5) {
				$("#weak").append(tHtml);
			} else if (value === 2) {
				$("#resistant").append(tHtml);
			} else if (value === 4) {
				$("#superResistant").append(tHtml);
			}
		});
	}
});
