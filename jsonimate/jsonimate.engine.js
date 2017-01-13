/**
 * This file was originally published in https://github.com/BioK03
 * It is free to use, modify, reshare and take property (MIT License)
 * 
 * Works well with Easings : http://easings.net/fr 
 * 
 * 
 */

$localJson = "";

/* STARTING POINT */
/**
 * $json => The Json file
 */
function jsonimate($json){
    /* COPYING JSON TO LOCAL TO AVOID ILLEGAL MODIFICATION */
    $localJson = $json;

    /* LOOP FOR ALL JSONIMATE IN ONE PAGE */
    $.each($localJson, function(key, value){
        /* APPEND FIRST PICTURE FROM INITIAL STATE */
        $("#renderer").append("<img id='"+key+"' class='jsonimate' src='"+value.image+"'/>");

        /* APPLY CSS FROM INITIAL STATE */
        $("#"+key).css({
            top: value.startPosition.y+'%',
            left: value.startPosition.x+'%',
            height: value.startSize.height+'%',
            width: value.startSize.width+'%',
            transform: "rotate("+value.startAngle+"deg)"
        });

        /* STARTING ANIMATION WITH START PADDING FROM INITIAL STATE */
        setTimeout(function(){
            nextAction(key, 0);
        }, value.startPadding);
    });
}

/* NEXT POINTS, ANIMATION FUNCTION */
/**
 * $id => String 
 * $stateNumber => The number of the animation inside the jsoon
 */
function nextAction($id, $stateNumber){

    /* loop if the statenumber is outside of the range */
    if($stateNumber >= $localJson[$id].states.length){
        /* loop only if repetition is set */
        if($localJson[$id].repetition >= 0){
            setTimeout(function(){
                /* SET to initial position */
                $("#"+$id).css({
                    top: $localJson[$id].startPosition.y+'%',
                    left: $localJson[$id].startPosition.x+'%',
                    height: $localJson[$id].startSize.height+'%',
                    width: $localJson[$id].startSize.width+'%'/*,
                    transform: "rotate("+$localJson[$id].startAngle+"deg)"*/
                });
                nextAction($id, 0);
            }, $localJson[$id].repetition);
        }
        return;
    }

    /* COPYING state from json */
    $state = $localJson[$id].states[$stateNumber];

    /* IF picture is changed, the change it */
    if($state.startImage != ""){
        $("#"+$id).attr("src", $state.startImage);
    }

    /* PARSING transform data -> calculating difference between next state and current position */
    $values = $("#"+$id).css("transform").split('(')[1].split(')')[0].split(',');
    $angle = Math.round(Math.atan2($values[1], $values[0]) * (180/Math.PI));

    /* Animate the transform */
    $({deg: $angle}).animate({deg: $state.endAngle}, {
        duration: $state.animationTime,
        step: function(now) {
            $("#"+$id).css({
                '-moz-transform': 'rotate('+now+'deg)',
                '-webkit-transform': 'rotate('+now+'deg)',
                '-o-transform': 'rotate('+now+'deg)',
                '-ms-transform': 'rotate('+now+'deg)',
                transform: 'rotate('+now+'deg)'
            });
        }
    });

    /* Aniamting the CSS */
    $("#"+$id).animate(
        {
            top: $state.endPos.y+'%',
            left: $state.endPos.x+'%',
            height: $state.endSize.height+'%',
            width: $state.endSize.width+'%'
        }, 
        $state.animationTime,
        $state.animationType, 
        function(){
            /* Padding for the next animation */
            setTimeout(function(){
                nextAction($id, $stateNumber+1);
            }, $state.endPaddingTime);
        }
    );
}

