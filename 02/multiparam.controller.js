angular.module("myApp", [])
.controller("control", function ($scope) {
    
    $scope.cadastrar = cadastrar;//não colocar com parenteses, senão realiza a chamada do metdo
    $scope.contatos = [];

    function cadastrar(contato) {
        $scope.contatos.push({nome : contato.nome,
                    idade:contato.idade,
                telefone:contato.telefone});
                console.log($scope.contatos);
    }
})