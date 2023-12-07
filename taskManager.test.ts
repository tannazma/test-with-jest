import { addTask, deleteTask, getTasks, markTaskAsDone } from "./taskManager";

test("addTask  function", () => {
  expect(addTask("Do laundry")).toContain("Do laundry");
});

test("deleteTask  function", () => {
  addTask("Buy groceries");
  expect(deleteTask("Buy groceries")).not.toContain("Buy groceries");
});

test("markTaskAsDone  function", () => {
  const taskToBeDone = "Do hgvhj";
  const doneTask = markTaskAsDone(taskToBeDone);
  expect(doneTask).toMatch("marked as done");
  expect(doneTask).toMatch(taskToBeDone);
});

test("getTask function", () => {
  addTask("Clean room");
  expect(getTasks()).toContain("Clean room");
});
