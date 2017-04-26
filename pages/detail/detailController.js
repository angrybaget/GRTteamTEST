(function () {
    'use strict';

    angular
        .module('grt')
        .controller('DetailController', detailController);

    function detailController($stateParams, $http) {

        var vm = this;
        if($stateParams.id){
            $http.get('https://api.unsplash.com/photos/'+$stateParams.id, {
                params:{
                    client_id: '018739eb3b0233656693c533f6eb2bef61d5792e0c1f7f3905b942600f75ad5b',
                    }
            }).then(function(res){
                vm.photo = res.data;
            });
        }

    }




})();