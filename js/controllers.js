<script type="text/javascript" src="http://code.angularjs.org/angular-1.0.1-min.js"></script>
<script type="text/javascript" src="js/controllers.js"></script>

function TodoCrtl($scope) {
  $scope.newItem = "";
  $scope.todoList = [{ label: "buy milk" }, { label: "pay power cost" }];
}
