window.onload=function () {
    var map = new AMap.Map('container', {
        resizeEnable: true,
        zoom:19,
        center: [109.315, 22.165]
    });
    AMap.plugin(['AMap.ToolBar','AMap.Scale'],function(){
        var toolbar = new AMap.ToolBar();
        var scale = new AMap.Scale();
        map.addControl(toolbar);
        map.addControl(scale);

    });
    var infoWindow = new AMap.InfoWindow({offset:new AMap.Pixel(0,-30)});

    var marker = new AMap.Marker({
        position: [109.315, 22.165],
        map:map
    });
    marker.content='广西钦州市浦北县';
    marker.on('click',markerClick);
    marker.emit('click',{target:marker});
    function markerClick(e){
        infoWindow.setContent(e.target.content);
        infoWindow.open(map, e.target.getPosition());
    }

    map.setFitView();
};

/*Gloriman*/