import { createSignal, createEffect } from "solid-js";
import { Input } from "./input.jsx";
import { List } from "./list.jsx";
import { makeStorage } from "./utils.js";

let storage = makeStorage("todos");

export function App() {
    let [getTodos, setTodos] = createSignal(storage.get() ?? []);

    createEffect(() => {
        storage.set(getTodos());
    });

    function add(newTodo) {
        setTodos([...getTodos(), newTodo]);
    }

    function remove(id) {
        setTodos(getTodos().filter((todo) => todo.id !== id));
    }

    function edit(updatedTodo) {
        let index = getTodos().findIndex((todo) => todo.id === updatedTodo.id);
        let newTodos = [...getTodos()];
        newTodos[index] = updatedTodo;
        setTodos(newTodos);
    }

    return (
        <div class="pt-16 max-w-sm mx-auto grid gap-6">
            <h1 class="font-bold text-3xl pb-2">Todo List Solid</h1>
            <Input add={add} />
            <List todos={getTodos()} remove={remove} edit={edit} />
        </div>
    );
}
