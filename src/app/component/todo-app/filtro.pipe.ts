import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "./models/todo.models";
import * as actions from "./filtro/filtro.actions";

@Pipe({
  name: "filtroTodo",
})
export class FiltroPipe implements PipeTransform {
  transform(todos: Todo[], filtro: actions.filtrosValidos): Todo[] {
    console.log(filtro);

    switch (filtro) {
      case "completados":
        return todos.filter((todo) => todo.completado);
        break;
      case "pendientes":
        return todos.filter((todo) => !todo.completado);
        break;
      default:
        return todos;
    }
  }
}
