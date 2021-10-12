<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title style="font-size:0px;">Food Menu</title>

        <!--Custom Scripts-->
        <link rel="stylesheet" href="./style.css" type="text/css">
        <script src="./main.js"></script>

        <!--Google Fonts-->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap">
    </head>
    <body>
        <div id="list">
            <?php
                //variables
                $jsonDataStringify = file_get_contents("./json/data.json");
                $jsonDataItems = json_decode($jsonDataStringify, true);

                //Generate date HTML comment.
                echo "<!--\n        This file was generated.\n      Date:" . date(" Dd-m-y h:i:s") . "\n        Time: " . date("A") . "\n   -->";

                //Food Types: Sweat, Sour, Cake, Drink, Sandwhich, Meat, Snack, Fried.
                foreach ($jsonDataItems as $jsonData) {
                    foreach ($jsonData as $json) {

                        $name = $json["name"];
                        $icon_url = $json["icon_url"];

                        echo "<div id='food-item' onClick='displayData(this);'><div style=" . '"' . "background-image:url('$icon_url');background-size:100% 100%;height:10em;width:100%;background-repeat:no-repeat;background-position: center;" . '"' . "><span>$name</span></div>";
                        
                        echo "<ul id='ingredients'>";
                        foreach($json["toppings"] as $topping) {
                            echo "<il>$topping</il>";
                        };
                        echo "</ul>";

                        echo "<span id='description'>" . $json['description'] . "</span>";


                        echo"</div>";
                    };
                };
            ?>
        </div>
        <div id="display_food_item">
            <span id="display_food_item_title"><span style="color:gray;text-align:center;padding-bottom:5%;">Placeholder Text</span></span>
            <img id="display_food_item_image" src="./image/no-image.png" alt="no-image.png" height="125px" width="125px">
            <p id="display_food_item_toppings"><strong style="color:gray;text-align:center;padding-bottom:5%;">Placeholder Text</strong></p>
            <span id="display_food_item_description"><strong style="color:gray;text-align:center;padding-bottom:5%;">Placeholder Text</strong></span>
        </div>
        <!--<div class="info">
            <a target="new" href="https://github.com/SquerlInMyPants"><img width="200px" height="400px" src="image\practice.png" alt="practice png"></a>
        </div>-->
    </body>
</html>