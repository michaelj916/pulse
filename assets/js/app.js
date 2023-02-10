// check for device size ( 768px targets mobile devices and upwards to iPad's )
const responsive = window.matchMedia('(max-width: 768px)');


if (responsive.matches) {
    var title = new Blotter.Text("PULSE", {  // if device is responsive, decrease font size and padding
        family : "'Roboto', sans-serif",
        size : 90,
        weight : 900,
        fill : "#26ff0e",
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 5,
        paddingBottom: 15
    });
}
else {
    var title = new Blotter.Text("PULSE", {  // else increase font size and padding for computers
        family : "arial",
        size : 200,
        weight : 950,
        fill : "#26ff0e",
        paddingTop: -20,
        paddingBottom: 0
    });
}

// refer 'https://blotter.js.org/#/documentation'
var material = new Blotter.LiquidDistortMaterial();

if (responsive.matches) {
    material.uniforms.uSpeed.value = 0.2;
    material.uniforms.uSeed.value = 0.2;
    material.uniforms.uVolatility.value = 0.2;
    //material.uniforms.uPointRadius.value = 1;
    //material.uniforms.uPointCellWidth.value = 0.02;

    // material.uniforms.uVolatility.value = 0.05;
    // material.uniforms.uSeed.value = 0.5;
}
else {
    material.uniforms.uSpeed.value = 0.2;
    material.uniforms.uSeed.value = 0.4;
    material.uniforms.uVolatility.value = 0.08;
    //material.uniforms.uPointRadius.value = 0.8;
    //material.uniforms.uPointCellWidth.value = 0.025;
    // material.uniforms.uVolatility.value = 0.1;
    // material.uniforms.uSeed.value = 0.0;
}


var blotter = new Blotter(material, { 
    texts : title
});

var elem = document.getElementById("header");
var scope = blotter.forText(title);

scope.appendTo(elem);