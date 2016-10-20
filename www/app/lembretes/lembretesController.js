(function () {
    'use strict';

    angular
        .module('lembretesApp')
         .controller('lembretesController', lembretesController);
    
    lembretesController.$inject = ['$ionicPopup','$scope'];

    function lembretesController($ionicPopup,$scope) {
        var vm = this;
        var lembretes = new getLembretes();
        vm.lembretes = lembretes.items;
        vm.mostrarFinalizadas = false;
        vm.removeStatus = false;
        
        vm.getPopup = getPopup;
        vm.alterarValor = alterarValor;
        vm.removeTarefa = removeTarefa;
        vm.adicionarTarefa = adicionarTarefa;
        vm.mostrarBotaoRemover = mostrarBotaoRemover;
        vm.esconderItemFinalizado = esconderItemFinalizado;
        
        function getPopup() {
            vm.data = {};
            vm.data.newTask = "";
            var item = {nome: "", finalizada: false};
            $ionicPopup.show({
                title: "Nova Tarefa",
                scope: $scope,
                template:"<input type='text' placeholder='Tarefa' autofocus='true' ng-model='vm.data.newTask'>",
                buttons:[
                    {text: "Adicionar", onTap: function(e){
                        item.nome = vm.data.newTask;
                        lembretes.add(item);
                        lembretes.save();
                    }},
                    {text: "Cancelar"}
                ]
            });
        };
        function alterarValor(item) {
            item.finalizada = !item.finalizada;
        };
        function esconderItemFinalizado(item){
            return item.finalizada && !vm.mostrarFinalizadas;
        };
        function mostrarBotaoRemover(){
            vm.removeStatus = !vm.removeStatus;
        };
        function removeTarefa(item){
            lembretes.remove(item);
            lembretes.save();
        };
        function adicionarTarefa(){
            this.getPopup();
        };
        
        
    };

})();