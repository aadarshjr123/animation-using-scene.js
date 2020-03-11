new Scene({
    // ".target5": Scene.flip({ x: 2, y: 3 , backside:true}).setDuration(5),
    // ".target4": Scene.flip({ x: 2, y: 3}).setDuration(5),
    // ".target3": Scene.flip({ x: 2, y: 3}).setDuration(5),
    ".target1": Scene.flip({ x: 2, y: 3 }).setDuration(5),
    ".target2": Scene.flip({ x: 2, y: 3 ,backside:true}).setDuration(5),
    
    
    
    
 

  }, {
    selector: true,
    iterationCount: "infinite",
  }).play();