# jsonimate
![logo](https://github.com/BioK03/jsonimate/blob/master/images/logo.png)

JSONimate is a minimalist <img src="http://logonoid.com/images/jquery-logo.png" height="20"/> jQuery 2D engine that works with CSS3.

You just have to pass a formatted <img src="http://logonoid.com/images/json-logo.png" height="20"/> JSON to a function and the animations begins !

# Presentation
JSONimate is a <img src="http://logonoid.com/images/jquery-logo.png" height="20"/> jQuery library. You have to include jQuery first to be able to use JSONimate.
This 2D engine generates on the fly CSS properties and jQuery animations.

You can see some examples in the :file_folder:/examples folder.

# Architecture
Folder / File | Description
-------- | --------------
⊢  :file_folder:/examples | Some examples files you have also access with de :pencil:/index.html file
&nbsp;&nbsp;&nbsp;⊢ :pencil:1 | Example 1 : A flying phone...
&nbsp;&nbsp;&nbsp;⊢ :pencil:2 | Example 2 : Carousel...
&nbsp;&nbsp;&nbsp;⊢ :pencil:3 | Example 3 : A running man...
⊢  :file_folder:/images | The images folder
&nbsp;&nbsp;&nbsp;⊢ :pencil:logo.png | The JSONimate logo
⊢  :file_folder:/jsonimate | The JSONimate folder
&nbsp;&nbsp;&nbsp;⊢ :pencil:jsonimate.css | The <img src="http://logonoid.com/images/css3-logo.png" height="20"/> CSS sheet of JSONimate
&nbsp;&nbsp;&nbsp;⊢ :pencil:jsonimate.engine.js | The developer version of JSONimate
&nbsp;&nbsp;&nbsp;⊢ :pencil:jsonimate.engine.min.js | The production version of JSONimate
⊢  :file_folder:/lib | The lib folder
&nbsp;&nbsp;&nbsp;⊢ :pencil:jquery.easing.js | The Easings library that permits to add effects (optional)
&nbsp;&nbsp;&nbsp;⊢ :pencil:jquery.min.js | The <img src="http://logonoid.com/images/jquery-logo.png" height="20"/> jQuery production file ( :warning: required)
⊢  :file_folder:/styles | The styles folder
&nbsp;&nbsp;&nbsp;⊢ :pencil:style.css | The <img src="http://logonoid.com/images/css3-logo.png" height="20"/> CSS file of the project (purely optional)
⊢  :pencil:Easing.url | Some documentation about the Easings library
⊢  :pencil:gulpfile.js | The <img src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" height="20"/> gulpfile worflow to automatically compress the JSONimate.engine.js file
⊢  :pencil:index.html | The <img src="http://logonoid.com/images/html5-logo.png" height="20"/> index file of the project
⊢  :pencil:package.json | The <img src="https://docs.npmjs.com/images/npm.svg" height="20"/> NPM file of the project

The <img src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" height="20"/> Gulp workflow is purely optional, you can use online minifiers or use the developer version.
If so, don't use <img src="https://docs.npmjs.com/images/npm.svg" height="20"/> NPM as it was included in the project only for <img src="https://raw.githubusercontent.com/gulpjs/artwork/master/gulp-2x.png" height="20"/> Gulp !


# Configuration
As long as JSONimate is a simple jQuery file, you juste need to start with a simple <img src="http://logonoid.com/images/html5-logo.png" height="20"/> HTML file :
``` html
<!DOCTYPE html>
<html>
    <head>
        <!-- JSONimate CSS file (it just put a CSS reset and put CSS rules over .jsonimate and put #renderer in full screen), but required (at least the .jsonimate{...} rule !) -->
        <link rel="stylesheet" href="jsonimate/jsonimate.css"/>
    </head>
    <body>
        <!-- The #renderer div is where the animation will be displayed -->
        <div id="renderer">

        </div>

        <!-- The required link to jQuery. You can also use CDN : 
         https://code.jquery.com/jquery-3.1.1.min.js -->
        <script type="text/javascript" src="lib/jquery.min.js"></script>

        <!-- Easings is purely optional. Docs here : http://easings.net/fr -->
        <script type="text/javascript" src="lib/jquery.easing.js"></script>

        <!-- JSONimate engine file -->
        <script type="text/javascript" src="jsonimate/jsonimate.engine.min.js"></script>

        <!-- Your JS file -->
        <script type="text/javascript" src="call.js"></script>
    </body>
</html>
```
Directs links :

[jQuery CDN](https://code.jquery.com/jquery-3.1.1.min.js)

[Easings Docs](http://easings.net/fr)


# Writing your first JSONimate project

Follow the simple steps :
 * Create an index.html file and paste the code in the previous section
    * Download the jQuery file or use the CDN
    * Choose to include Easings or not
 * Create a file called 'call.js' and paste the following code :

``` javascript

$json = {
    "ID": {
        
        /* INITIAL STATE HERE */
        "states": [
            /* FOLLOWING STATES HERE */
        ]
    }
};

jsonimate($json);
```

The "ID" string corresponds to the id of the element that will be created and animated. It must be unique and must not be present in the initial <img src="http://logonoid.com/images/html5-logo.png" height="20"/> HTML page.

:warning: All options detailled below are mandatory !

## Initial state
The initial state muse be defined at the beginning of the call.js file.

```json
"image": "image.png",
"repetition": 2000,
"startPadding": 0,

"startPosition": {
    "x": 10,
    "y": 10
},
"startAngle": 0,
"startSize": {
    "width": 3,
    "height": 3
},
```


### Options
Name  | Description
---- | ----
image | The picture to print at the start point
repetition | Delay between the animation end point and the restart of the animation, in ms. (-1 = no repetition)
startPadding | Delay before the animation start at the first time
startPosition | The position the image is printed at the start point (in %)
startAngle | Angle where the image is printed ( :warning: BETA)
startSize | The size of the picture befire the animation starts (in %)

## Following states
A following state is an object that must be paste inside the state[] array inside the call.js file.

:heavy_exclamation_mark: The order inside the states[] array is the order of the animation !

A following state is like this bunch of code :

```json
{
    "startImage": "",
    "endPos": {
        "x": 20,
        "y": 10
    },
    "endAngle": 179,
    "endSize": {
        "width": 3,
        "height": 3
    },
    
    "animationType": "linear",
    "animationTime": 2000,
    "endPaddingTime": 0
},
```

### Options

Name | Description
--- | ---
startImage | The image set at the beginning of the state (if you d'ont want to change image, put "")
endPos | The end position at the end of the state (in %)
endAngle | The angle at the end of the state ( :warning: BETA)
endSize | The size of the picture at the end of the state (in %)
animationType | The type of animation to play. With jQuery, you have swing or linear. With Easings, you can have different types of animations ! (Docs : http://easings.net/fr)
animationTime | The time of the animation (in ms)
endPaddingTime | The time before the next animation starts (for the last state : time before the animation restarts if repetition > 0)



# Credits

Logos here are from [Logonoid](http://logonoid.com/) or official docs !
