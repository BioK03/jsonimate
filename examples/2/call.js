

$json = {
    "id1": {
        image: "",
        repetition: 0,
        startPadding: 0,

        startPosition: {
            x: 0,
            y: 0
        },
        startAngle: 0,
        startSize: {
            width: 100,
            height: 100
        },

        states: [
            {
                startImage: "images/1.jpg",
                endPos: {
                    x: 100,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "linear",
                animationTime: 1,
                endPaddingTime: 0
            },
            {
                startImage: "",
                endPos: {
                    x: 0,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "easeInOutCubic",
                animationTime: 1000,
                endPaddingTime: 1000
            },
            {
                startImage: "",
                endPos: {
                    x: -100,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "easeInOutCubic",
                animationTime: 1000,
                endPaddingTime: 0
            },
            {
                startImage: "images/white.png",
                endPos: {
                    x: 100,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "linear",
                animationTime: 1,
                endPaddingTime: 0
            },
            {
                startImage: "images/2.jpg",
                endPos: {
                    x: 0,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "easeInOutCubic",
                animationTime: 1000,
                endPaddingTime: 1000
            },
            {
                startImage: "",
                endPos: {
                    x: -100,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "easeInOutCubic",
                animationTime: 1000,
                endPaddingTime: 0
            },
            {
                startImage: "images/white.png",
                endPos: {
                    x: 100,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "linear",
                animationTime: 1,
                endPaddingTime: 0
            },
            {
                startImage: "images/3.jpg",
                endPos: {
                    x: 0,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "easeInOutCubic",
                animationTime: 1000,
                endPaddingTime: 1000
            },
            {
                startImage: "",
                endPos: {
                    x: -100,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "easeInOutCubic",
                animationTime: 1000,
                endPaddingTime: 0
            },
            {
                startImage: "images/white.png",
                endPos: {
                    x: 100,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "linear",
                animationTime: 1,
                endPaddingTime: 0
            },
            {
                startImage: "images/4.jpg",
                endPos: {
                    x: 0,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "easeInOutCubic",
                animationTime: 1000,
                endPaddingTime: 1000
            },
            {
                startImage: "",
                endPos: {
                    x: -100,
                    y: 0
                },
                endAngle: 0,
                endSize: {
                    width: 100,
                    height: 100
                },
                
                animationType: "easeInOutCubic",
                animationTime: 1000,
                endPaddingTime: 0
            }
        ]
    }
};

jsonimate($json);