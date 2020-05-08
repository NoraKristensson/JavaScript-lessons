$.ajax("/data/employees.json").done((employees) => {
  let list = $("<ul></ul>");
  list.addClass("bulleted");

  for (let employee of employees) {
    let listItem = $("<li></li>");

    listItem.text(employee.name).addClass(employee.inOffice ? "in" : "out");
    list.append(listItem);
  }
  $("#employeeList").append(list);
});
