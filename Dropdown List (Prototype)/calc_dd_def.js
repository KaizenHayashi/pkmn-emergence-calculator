var types = new Array(
//   Defending types:
//   Nor  Fig  Fly     Poi  Gru  Roc     Bug  Gho  Stl     Fir  Wtr  Grs     Ele  Psy  Ice     Drg  Drk  Fry     Cos  Vir  Voi     None
    [1  , 1  , 1  ,    1  , 1  , 0.5,    1  , 0  , 0.5,    1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    0  , 1  , 1  ,    1],// Normal
    [2  , 1  , 0.5,    0.5, 1  , 2  ,    0.5, 0  , 2  ,    2  , 1  , 1  ,    1  , 0.5, 2  ,    1  , 2  , 0.5,    0.5, 1  , 1  ,    1],// Fighting
    [1  , 2  , 1  ,    1  , 1  , 0.5,    2  , 1  , 0.5,    2  , 1  , 1  ,    0.5, 1  , 0.5,    1  , 1  , 1  ,    2  , 1  , 1  ,    1],// Flying
// ====================================================================================================================================
    [1  , 1  , 1  ,    0.5, 0.5, 0.5,    1  , 0.5, 0  ,    1  , 2  , 2  ,    1  , 1  , 1  ,    1  , 1  , 2  ,    1  , 0.5, 1  ,    1],// Poison
    [1  , 1  , 0  ,    2  , 1  , 2  ,    0.5, 1  , 2  ,    1  , 1  , 0.5,    2  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1],// Ground
    [1  , 0.5, 2  ,    1  , 0.5, 1  ,    2  , 1  , 0.5,    2  , 1  , 1  ,    1  , 1  , 2  ,    1  , 1  , 1  ,    0.5, 1  , 1  ,    1],// Rock
// ====================================================================================================================================
    [1  , 1  , 0.5,    0.5, 1  , 1  ,    1  , 0.5, 1  ,    0.5, 1  , 2  ,    1  , 2  , 1  ,    1  , 2  , 1  ,    1  , 2  , 1  ,    1],// Bug
    [0  , 1  , 1  ,    1  , 1  , 1  ,    1  , 2  , 1  ,    1  , 1  , 1  ,    1  , 2  , 1  ,    1  , 0.5, 1  ,    1  , 0  , 1  ,    1],// Ghost
    [1  , 1  , 1  ,    1  , 1  , 2  ,    1  , 1  , 0.5,    0.5, 0.5, 1  ,    0.5, 1  , 2  ,    1  , 1  , 2  ,    1  , 1  , 1  ,    1],// Steel
// ====================================================================================================================================
    [1  , 1  , 1  ,    1  , 1  , 0.5,    2  , 1  , 2  ,    0.5, 0.5, 2  ,    1  , 1  , 1  ,    0.5, 1  , 1  ,    2  , 1  , 1  ,    1],// Fire
    [1  , 1  , 1  ,    1  , 2  , 2  ,    1  , 1  , 1  ,    2  , 0.5, 0.5,    1  , 1  , 0.5,    0.5, 1  , 1  ,    1  , 2  , 1  ,    1],// Water
    [1  , 1  , 1  ,    1  , 2  , 2  ,    0.5, 1  , 0.5,    0.5, 2  , 0.5,    1  , 1  , 1  ,    0.5, 1  , 1  ,    1  , 1  , 1  ,    1],// Grass
// ====================================================================================================================================
    [1  , 1  , 2  ,    1  , 0  , 1  ,    1  , 1  , 1  ,    1  , 2  , 0.5,    0.5, 1  , 1  ,    0.5, 1  , 1  ,    1  , 0.5, 1  ,    1],// Electric
    [1  , 2  , 1  ,    2  , 1  , 1  ,    0.5, 1  , 0.5,    1  , 1  , 1  ,    1  , 0.5, 1  ,    1  , 0  , 1  ,    0.5, 1  , 1  ,    1],// Psychic
    [1  , 1  , 2  ,    1  , 2  , 1  ,    1  , 1  , 0.5,    1  , 0.5, 2  ,    1  , 1  , 0.5,    2  , 1  , 1  ,    1  , 1  , 1  ,    1],// Ice
// ====================================================================================================================================
    [1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 0.5,    1  , 1  , 1  ,    1  , 1  , 1  ,    2  , 1  , 0  ,    1  , 1  , 1  ,    1],// Dragon
    [1  , 0.5, 1  ,    1  , 1  , 1  ,    1  , 2  , 1  ,    1  , 1  , 1  ,    1  , 2  , 1  ,    1  , 0.5, 0.5,    2  , 1  , 1  ,    1],// Dark
    [1  , 2  , 1  ,    0.5, 1  , 1  ,    1  , 1  , 0.5,    0.5, 1  , 1  ,    1  , 1  , 1  ,    2  , 2  , 1  ,    1  , 1  , 1  ,    1],// Fairy
// ====================================================================================================================================
    [1  , 1  , 1  ,    1  , 2  , 1  ,    1  , 1  , 1  ,    0.5, 1  , 1  ,    1  , 2  , 1  ,    0.5, 0.5, 1  ,    1  , 0.5, 1  ,    1],// Cosmic
    [1  , 1  , 1  ,    0.5, 1  , 1  ,    1  , 1  , 0.5,    1  , 1  , 1  ,    2  , 1  , 1  ,    0.5, 1  , 2  ,    0.5, 1  , 1  ,    1],// Virtual
    [1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 0  ,    1],// Void
// ====================================================================================================================================
    [1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1  , 1  , 1  ,    1]);// None
    
var type_name = new Array("Normal"  , "Fighting", "Flying",
                          "Poison"  , "Ground"  , "Rock",
                          "Bug"     , "Ghost"   , "Steel",
                          "Fire"    , "Water"   , "Grass",
                          "Electric","Psychic"  , "Ice",
                          "Dragon"  , "Dark"    , "Fairy",
                          "Cosmic"  , "Virtual" , "Void");
    
var abilities = new Array(
//   Defending against:
//   Nor  Fig  Fly  Poi  Gru  Roc  Bug  Gho  Stl  Fir  Wtr  Grs  Ele  Psy  Ice  Drg  Drk  Fry  Cos  Vir  Voi  None
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// None
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 1],// Thick Fat (0.5x from Fire and Ice)
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// Heatproof (0.5x from Fire)
    [1  , 1  , 1  , 1  , 0  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// Levitate (0x from Ground)
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// Volt Absorb (0x from Electric)
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// Water Absorb (0x from Water)
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  ,1.25, 0  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// Dry Skin (1.25x from Fire, 0x from Water)
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// Flash Fire (0x from Fire)
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// Sap Sipper (0x from Grass)
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// Filter (0.75x from SE)
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1]);// Wonder Guard (0x from non-SE)

var weathers = new Array(
//   Defending against:
//   Nor  Fig  Fly  Poi  Gru  Roc  Bug  Gho  Stl  Fir  Wtr  Grs  Ele  Psy  Ice  Drg  Drk  Fry  Cos  Vir  Voi  None
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// None
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1.5, 0.5, 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1],// Drought (1.5x Fire, 0.5x Water)
    [1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 0.5, 1.5, 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1  , 1]);// Drizzle (1.5 Water, 0.5x Fire)
    
$(document).ready(function(){

    $("#submit").click(function()
    {
        $("div#content").hide();
        var type1 = $("#def_type1").val();
        var type2 = $("#def_type2").val();
        var ability = $("#def_ability").val();
        var weather = $("#def_weather").val();
        var color = new Array();
        var result = new Array();
        var output;
        var i;
        
        if(type1 != type2)
        {
            for (i=0; i<=21; i++)
            {
                result[i] = ((types[i][type1] * types[i][type2]) * abilities[ability][i]) * weathers[weather][i];
                if((types[i][type1] * types[i][type2]) < 2 && ability == 10){result[i] = 0};
                if((types[i][type1] * types[i][type2]) >= 2 && ability == 9){result[i] = result[i] * 0.75};
                if(result[i] == 1){color[i] = "dmg_normal"};
                if(result[i] < 1){color[i] = "dmg_resist"};
                if(result[i] < 0.5){color[i] = "dmg_resist2"};
                if(result[i] == 0){color[i] = "dmg_immune"};
                if(result[i] > 1){color[i] = "dmg_weak"};
                if(result[i] > 2){color[i] = "dmg_weak2"};
            }
    
            output = '<table class="output" cellspacing="1" cellpadding="2"><tr>';
            for (i=0; i<=20; i++){
                output += '<td class="tbl_heading">' + type_name[i] + '</td>';
            }
            output += '</tr><tr>';
            for (i=0; i<=20; i++){
                output += '<td class="'+ color[i] +'">x' + result[i] + '</td>';
            }
            output += '</tr></table>';
            
            $("div#content").empty().append(output).show();}
        else{
            $("div#content").empty().append("Type 1 and Type 2 must be different").show();
        }
    });
});