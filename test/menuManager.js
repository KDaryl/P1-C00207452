/* global MenuManager, describe, it, expect, should */

var mManager = new MenuManager(); //Create a menu manager

describe('MenuManager', function () {
  'use strict';

  it('exists', function () { //Checking that menu manager exists and all of its functions are defined
    expect(MenuManager).to.be.a('function');
    expect(mManager.addScene).to.be.a('function');
    expect(mManager.removeScene).to.be.a('function');
    expect(mManager.setAutoTransition).to.be.a('function');
  });

  //Do test
  it('Add 5 Scenes', function () {
    mManager.addScene("Scene1", 29);
    mManager.addScene("Scene2", 28);
    mManager.addScene("Scene3", 27);
    mManager.addScene("Scene4", 26);
    mManager.addScene("Scene5", 25);
    expect(true).to.equal(false);
  });

  it('Delete 5 Scenes', function () {
    mManager.addScene("Scene1");
    mManager.addScene("Scene2");
    mManager.addScene("Scene3");
    mManager.addScene("Scene4");
    mManager.addScene("Scene5");
    expect(true).to.equal(false);
  });


});
