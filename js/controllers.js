function TodoCrtl($scope) {
  $scope.newItem = "";
  $scope.todoList = [{ label: "buy milk" }, { label: "pay power cost" }];
  $scope.addItem = function() {
    if(this.newItem) {
      this.todoList.push({label:this.newItem});
      this.newItem = "";
    }
  }
}
