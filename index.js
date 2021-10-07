/*
███╗░░░███╗░█████╗░██████╗░███████╗  ██████╗░██╗░░░██╗
████╗░████║██╔══██╗██╔══██╗██╔════╝  ██╔══██╗╚██╗░██╔╝
██╔████╔██║███████║██║░░██║█████╗░░  ██████╦╝░╚████╔╝░
██║╚██╔╝██║██╔══██║██║░░██║██╔══╝░░  ██╔══██╗░░╚██╔╝░░
██║░╚═╝░██║██║░░██║██████╔╝███████╗  ██████╦╝░░░██║░░░                   
╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═════╝░╚══════╝  ╚═════╝░░░░╚═╝░░░       
    ██╗░░░░░░█████╗░██╗░░░░░██╗░░██╗██████╗░██████╗░███████╗██╗░░░██╗
    ██║░░░░░██╔══██╗██║░░░░░╚██╗██╔╝██╔══██╗██╔══██╗██╔════╝██║░░░██║
    ██║░░░░░██║░░██║██║░░░░░░╚███╔╝░██║░░██║██║░░██║█████╗░░╚██╗░██╔╝
    ██║░░░░░██║░░██║██║░░░░░░██╔██╗░██║░░██║██║░░██║██╔══╝░░░╚████╔╝░
    ███████╗╚█████╔╝███████╗██╔╝╚██╗██████╔╝██████╔╝███████╗░░╚██╔╝░░
    ╚══════╝░╚════╝░╚══════╝╚═╝░░╚═╝╚═════╝░╚═════╝░╚══════╝░░░╚═╝░░░
*/

/**
 * @function displayData - Displays food item data.
 */

function displayData(data) {
    let displayTitle = document.getElementById("display_food_item_title"); //Display Food Title 
    let displayImage = document.getElementById("display_food_item_image"); //Display Food Image
    let displayToppings = document.getElementById("display_food_item_toppings"); //Display Food Toppings
    let displayDescription = document.getElementById("display_food_item_description"); //Display Food Description 

    let array = data.childNodes;
    let food_icon = array[0].style.backgroundImage;
    let name = array[0].childNodes[0].innerHTML;
    let toppings = array[1];
    let desc = array[2].innerHTML;
    
    food_icon = `${food_icon.match(/r'^https?:\/\/.*[\r\n]*/g) == true ? food_icon.match(/r'^https?:\/\/.*[\r\n]*/g):food_icon}`;

    displayDescription.innerHTML = `${desc}`; 

    displayImage.style.backgroundImage = food_icon;
    displayImage.src="";
    displayImage.alt=`${name}`;

    displayTitle.innerHTML = "<strong style='font-size:2em;'>"+ name + "</strong>";
    let toppingss = '<strong>Toppings<br></strong><ol style="color:black;align-text:left;padding-left:2.5%;">';
    for (var i=0; i<100; ++i) {
        try {
            toppingss += "<il style='margin:0px;'>"+toppings.childNodes[i].innerHTML+'</il>';
        } catch(e) {}
    }
    toppings+="</ol>";
    
    displayToppings.innerHTML = toppingss || "None";
    displayToppings.style="text-align:left;padding-bottom:5%;padding-left:37.5%;";

    console.log(`name: ${name} | toppings: ${toppings} | desc: ${desc}  | background image url: ${food_icon}`);
}