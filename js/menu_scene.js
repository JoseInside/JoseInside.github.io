var MenuScene = {

    preload : function()
    {
      console.log("preload de menu scene");
      this.game.stage.backgroundColor = "#000000";
      
      
    },
    create: function () {
        
        var logo = this.game.add.sprite(this.game.world.centerX, 
                                        this.game.world.centerY, 
                                        'logo');
        logo.anchor.setTo(0.5, 0.5);
        var buttonStart = this.game.add.button(this.game.world.centerX, 
                                               this.game.world.centerY + 240, 
                                               'button', 
                                               this.actionOnClick, 
                                               this, 2, 1, 0);
        buttonStart.anchor.set(0.5);
        var textStart = this.game.add.text(0, 0, "Play!");
        textStart.addColor("#3A44BF", 0);
        textStart.font = 'Sniglet';
        textStart.anchor.set(0.5);
        buttonStart.addChild(textStart);

        var button2 = this.game.add.button(this.game.world.centerX, 
                                               this.game.world.centerY + 150, 
                                               'button', 
                                               this.levelSelector, 
                                               this, 2, 1, 0);
        button2.anchor.set(0.5);
        var text2 = this.game.add.text(0, 0, "Level Selector");
        text2.addColor("#3A44BF", 0);
        text2.font = 'Sniglet';
        text2.anchor.set(0.5);
        button2.addChild(text2);
    },
    
    actionOnClick: function(){
        this.game.nextLvl = 1;
        this.game.state.start('preloader');
    }, 

    levelSelector: function() {
        this.game.state.start('levelSelector');
    }

};

module.exports = MenuScene;