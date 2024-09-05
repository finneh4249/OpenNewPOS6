function Button(className, insideStyle, position, callback){
    return {
        position: position,
        callback: callback,
        className: className,
        insideStyle: insideStyle,
        getPosition: () => position
    };
};

function Order(objectId){
    var self = this;
    self.items =[];
    self.objectId = objectId;
    
    self.addItem = function(item){
        self.items.push(item);
        self.updateDisplay();
    }
    
    self.updateDisplay = function(){
        var html = '';
        for (var i = 0; i < self.items.length; i++) {
            html += '<li>' + self.items[i] + '</li>';
        }
        document.getElementById(self.objectId).innerHTML = html;
    }
    
};

function Screen(screenArray){
    var self = this;
    
    self.buttons = [];
    self.screenArray = screenArray;
    
    self.hideAll = function(){
        for (i=0; i < self.buttons.length; i++){
            self.buttons[i].style = 'display: None';
        };
    };
    
    self.showAll = function(){
        for (i=0; i < self.buttons.length; i++){
            self.buttons[i].style = '';
        };
    };
        
    self.generate = function(){
        orderTable = $('#orderTakingScreen').get(0);
        
        for (i = 0; i < self.screenArray.length; i++){
        }
        
    }
}

Screen.Main = [];

function Till(){
    var self = this;
    
    self.setScreen = function(screen){
        self.screen.hideAll();
        self.screen  = screen;
        self.screen.showAll();
    };
    
    self.makeButtonTables = function(){
        table = $('#orderTakingScreen').get(0);
        
        for (i = 0; i<6; i++) {
            for (j = 0; j<10 ; j++) { 
                table.rows[table.rows.length-1].insertCell();
            };
            
            table.insertRow();
        };
        
        for (j = 0; j<10 ; j++) { 
            table.rows[table.rows.length-1].insertCell()
        };

        row = $('#topButtonsRowOne').get(0);

        for (i = 0; i<10; i++) { 
            row.insertCell()
        };

        row = $('#topButtonsRowTwo').get(0);
        
        for (i = 0; i<10; i++) { 
            row.insertCell()
        };
        
        
    };
    
    self.init = function(){
        self.screen = new Screen(Screen.Main);
        self.makeButtonTables();
    };
};

till = new Till();

$(document).ready(till.init)