(function () {
    'use strict';

    angular
        .module('grt')
        .controller('MainController', mainController);

    function mainController($http, $state) {

        var vm = this;
            vm.currPage = 1;
        function getData(){
            $http.get('https://api.unsplash.com/photos', {
                params:{
                    client_id: '018739eb3b0233656693c533f6eb2bef61d5792e0c1f7f3905b942600f75ad5b',
                    page: vm.currPage,
                    per_page: 10}
            }).then(function(res){
                vm.data = res.data;
                console.log(JSON.stringify(res,'',4) )
            });
        }

        getData();

        vm.goItem = function (photo) {
            $state.go('start.home.detail', {id: photo.id})
        }
        vm.changePage = function (isNext) {
            vm.currPage = isNext?vm.currPage + 1:vm.currPage - 1;
            getData();
            console.log(vm.currPage);
        }
    }




})();