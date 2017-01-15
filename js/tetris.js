/**
 * Created by jai1215 on 2017-01-01.
 */
var handle = {
    "type" : "none",
    "top" : 0,
    "left" : 0,
    "width" : 0,
    "height" : 0,
    "rotation" : 0,
    "speed" : 1000,
    "init" : function(){
        this.top = 0;
        this.left = 0;
        this.width = 0;
        this.height = 0;
        this.rotation = 0;
        this.setType("type"+(Math.floor(Math.random()*10)%7 + 1));
        this.setTop();
        this.rotate(0);

        this.move();
    },
    "setType" : function(typeName){
        this.type = types[typeName];
        var width = this.width = this.type.width;
        var height = this.height = this.type.height;

        $("#handle").empty()
            .width(width * 25)
            .height(height * 25);

        for(var i=0;i<height;i++){
            for(var j=0;j<width;j++){
                if(this.type.shape[i][j]){
                    $("<div>").addClass("block").addClass(typeName).appendTo("#handle");
                }
                else{
                    $("<div>").addClass("block").addClass("whiteLine").appendTo("#handle");
                }

            }
        }
    },
    "move" : function(){
        $("#handle").animate({"top":this.top*25, "left":this.left*25}, 50)
    },
    "setTop" : function(){
        this.left = 4;
        this.top = 0;
        this.rotation = 0;
        $("#handle").css({"top":this.top*25, "left":this.left*25});

    },
    "setRight" : function(){
        this.left+=1;
        this.move();
    },
    "setLeft" : function(){
        this.left-=1;
        this.move();
    },
    "setDown" : function(){
        this.top+=1;
        this.move();
    },
    "rotate" : function(rotation){
        console.log("rotate run", rotation);
        if(rotation != 0){
            this.rotation++;
            rotation = this.rotation %= this.type.maxRotation;
        }
        $("#handle").css("transform", "rotate("+rotation*90+"deg)");
        this.move();

    }
};


function setType(typeName){
    var type = types[typeName];
    var width = type.width;
    var height = type.height;

    $("#handle").empty().width(width*25)
        .height(height*25);

    for(var i=0;i<height;i++){
        for(var j=0;j<width;j++){
            if(type.shape[i][j]){
                $("<div>").addClass(typeName).addClass("block").appendTo("#handle");
            }
            else{
                $("<div>").addClass("whiteLine").appendTo("#handle");
            }
        }
    }



}

$(document).ready(function () {
    for(var i=0; i<20; i++){
        for(var j=0;j<10;j++){
            $("<div>").addClass("block none").appendTo("#stage")
        }
    }
    setType("type2")
});

$(document).keydown(function (e) {
    switch(e.which){
        case 39 : //right key
            handle.setRight();
        break;
        case 37 : //right key
            handle.setLeft();
            break;
        case 40 : //right key
            handle.setDown();
            break;
        case 38 : //right key
            handle.rotate(1);
            break;

    }
});
