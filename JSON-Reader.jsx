
var proj= app.project;
var jsonFileName = "person.json";

main();

function main()
{
    var jsonData = getJSON ();
    var strtTime = 1;
    var newComp = proj.items.addComp("JSON Anim", 1920, 1080, 1, 7, 30);
    
   var bgLayer = newComp.layers.addSolid([216/255, 216/255, 216/255], "Background", 1920, 1080, 1, 10);
   
    
    // First name
    var fnameLayer = newComp.layers.addText(jsonData["first name"]);
    textFormat (fnameLayer);
    fnameLayer.position.setValue([518, 236]);
    strtTime = createPopup (fnameLayer, strtTime);
    
    // Last Name
    var lnameLayer = newComp.layers.addText(jsonData["last name"]);
    textFormat (lnameLayer);
    lnameLayer.position.setValue([838, 444]);
    strtTime = createPopup (lnameLayer, strtTime);   
    
    // Is
    var isLayer = newComp.layers.addText("Is");
    textFormat (isLayer);
    isLayer.position.setValue([838,672]);
    strtTime = createPopup (isLayer, strtTime);
    
    // Age
    var ageLayer = newComp.layers.addText(jsonData["age"]);
    textFormat (ageLayer);
    ageLayer.position.setValue([858, 880]);
    strtTime = createPopup (ageLayer, strtTime);   
    
    // Years.
    var yearsLayer = newComp.layers.addText("years.");
    textFormat (yearsLayer);
    yearsLayer.position.setValue([1362, 880]);
    strtTime = createPopup (yearsLayer, strtTime);  
    
    newComp.openInViewer();
}



function textFormat (textLay)
/*
* Text formating styles that are applied to every text layer.
*/
{
    var textInfo = textLay.property("Source Text").value;
    textInfo.fontSize = 190;
    textInfo.fillColor = [46/255, 46/255, 46/255];
    textInfo.font = "Arial";
    textInfo.applyStroke = false;
    textInfo.applyFill = true;
    textInfo.tracking = 50;
    textInfo.justification = ParagraphJustification.CENTER_JUSTIFY;
    
    textLay.property("Source Text").setValue(textInfo);
}


function getJSON ()
/*
* Opens the JSON file, reads the data and returns a JavaScript object.
*/
{
    var jFile = new File(jsonFileName);
    var isOpen = jFile.open("r");
    if (!isOpen)
    {
        alert("JSON File couldn't be opened!");
        throw Error("Exiting script...");
    }
    var jStr = "";
    while (!jFile.eof)
        jStr += jFile.readln();
        
    return eval("(" + jStr + ")");
}


function createPopup (layerObj, strtTime)
/*
* Creates the text pop-up effect seen in the animation.
*/
{
    layerObj.opacity.setValueAtTime(strtTime, 0);
    layerObj.opacity.setValueAtTime(strtTime + (1/30), 100);
    
    layerObj.scale.setValueAtTime(strtTime, [0,0]);
    layerObj.scale.setValueAtTime(strtTime + (1/3), [120,120]);
    layerObj.scale.setValueAtTime(strtTime + (1/2), [100,100]);
    layerObj.scale.setInterpolationTypeAtKey(2, KeyframeInterpolationType.BEZIER);
    
    return strtTime + (1/2) + (1/3);
}
