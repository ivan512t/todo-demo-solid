import { createSignal, batch } from "solid-js";
import { makeID } from "./utils";

export function Input(props) {
    let [getValue, setValue] = createSignal("");

    function handleSubmit(event) {
        event.preventDefault();
        let value = getValue().trim();
        if (value) {
            batch(() => {
                props.add({ id: makeID(), text: value });
                setValue("");
            });
        }
    }

    return (
        <form onSubmit={handleSubmit} class="flex gap-2">
            <input
                type="text"
                value={getValue()}
                onInput={(event) => setValue(event.currentTarget.value)}
                placeholder="Add a new task..."
                class="px-4 py-2 border rounded-md text-sm flex-1"
            />
            <button
                type="submit"
                class="px-4 py-2 bg-[#4f88c6] rounded-md text-sm font-medium text-white"
            >
                Add
            </button>
        </form>
    );
}
