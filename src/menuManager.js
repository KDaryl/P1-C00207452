'use strict';

class MenuManager
{
  constructor()
  {
    this.scenes = {};
    this.current = undefined;
  }

  addScene(name, scene)
  {
    this.scenes[name] = scene; //add scene to our map, with the key 'name'

    if(this.current === undefined) //automatically sets current to the first scene added
    {
      console.log("current set");
      this.current = this.scenes[name];
    }
  }

  update() //Updates the current scene
  {
    if(this.current !== undefined)
    {
      this.current.update();
    }
  }

  draw() //Draws the current scene
  {
    if(this.current !== undefined)
    {
      this.current.draw();
    }
  }

  removeScene(name)
  {
    if(name in this.scenes.keys)
    {
      delete this.scenes[name];

      if(this.scenes.keys.length === 0)
      {
        this.current = undefined;
      }
    }
  }

  setAutoTransition(sceneA, sceneB) //Automatically transition from sceneA to SceneB
  {

  }

  setCurrentScene(name)
  {
    this.current = this.scenes[name];
  }
}
