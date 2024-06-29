import { For } from "solid-js";
import { Item } from "./item";

export function List(props) {
    return (
        <ul class="grid gap-3">
            <For each={props.todos}>
                {(todo) => <Item todo={todo} remove={props.remove} edit={props.edit} />}
            </For>
        </ul>
    );
}
