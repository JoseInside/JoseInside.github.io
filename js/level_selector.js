var LevelSelector = {

    preload : function()
    {
      console.log("scene selector");
      this.game.stage.backgroundColor = "#000000";
    },
    create: function () {
        
        var logo = this.game.add.sprite(this.game.world.centerX, 
                                        this.game.world.centerY, 
                                        'logo');
        logo.anchor.setTo(0.5, 0.5);

        var button1 = this.game.add.button(this.game.world.centerX, 
                                               this.game.world.centerY - 150, 
                                               'button', 
                                               this.level1, 
                                               this, 2, 1, 0);
        button1.anchor.set(0.5);
        var text1 = this.game.add.text(0, 0, "Level 1");
        text1.addColor("#3A44BF", 0);
        text1.font = 'Sniglet';
        text1.anchor.set(0.5);
        button1.addChild(text1);

        var button2 = this.game.add.button(this.game.world.centerX, 
                                               this.game.world.centerY  - 50, 
                                               'button', 
                                               this.level2, 
                                               this, 2, 1, 0);
        button2.anchor.set(0.5);
        var text2 = this.game.add.text(0, 0, "Level 2");
        text2.addColor("#3A44BF", 0);
        text2.font = 'Sniglet';
        text2.anchor.set(0.5);
        button2.addChild(text2);

        var button3 = this.game.add.button(this.game.world.centerX, 
                                               this.game.world.centerY + 240, 
                                               'button', 
                                               this.backToMenu, 
                                               this, 2, 1, 0);
        button3.anchor.set(0.5);
        var text3 = this.game.add.text(0, 0, "Back to Menu");
        text3.addColor("#3A44BF", 0);
        text3.font = 'Sniglet';
        text3.anchor.set(0.5);
        button3.addChild(text3);

    },
    
    level1: function(){
        this.game.nextLvl = 1;
        this.game.state.start('preloader');
    }, 

    level2: function () {
        this.game.nextLvl = 2;
        this.game.state.start('preloader');
    },

    backToMenu: function () {  
        this.game.state.start('menu');
    },

};

module.exports = LevelSelector;