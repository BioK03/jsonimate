
$json = {
    "id1": {
        image: "images/phone.png",
        repetition: 2000,
        startPadding: 0,

        startPosition: {
            x: 10,
            y: 10
        },
        startAngle: 0,
        startSize: {
            width: 3,
            height: 3
        },

        states: [
            {
                startImage: "",
                endPos: {
                    x: 20,
                    y: 10
                },
                endAngle: 179,
                endSize: {
                    width: 3,
                    height: 3
                },
                
                animationType: "linear",
                animationTime: 2000,
                endPaddingTime: 0
            },
            {
                startImage: "",
                endPos: {
                    x: 30,
                    y: 10
                },
                endAngle: 0,
                endSize: {
                    width: 3,
                    height: 3
                },
                
                animationType: "linear",
                animationTime: 1000,
                endPaddingTime: 0
            }
        ]
    }
};

jsonimate($json);