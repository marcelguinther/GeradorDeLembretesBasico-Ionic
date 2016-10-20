function getLembretes(params) {
    this.items = [];

    var lstItems = localStorage.getItem("Lembrete");
    if(lstItems !== null)
        this.items = angular.fromJson(lstItems);

    this.remove = function(item){
        var pos = this.items.indexOf(item);
        this.items.splice(pos, 1);
    }

    this.add = function(item){
        this.items.push(item);
    };

    this.save = function(){
        localStorage.setItem("Lembrete",angular.toJson(this.items));
    };
}