// Components
import { Table } from "./table";
// Methods
import { createEffect, createSignal, on, Switch, Match } from "solid-js";
import instance from "../../plugins/axios";

export function Hooks() {
  const [count, setCount] = createSignal(0);
  const [data, setData] = createSignal(null);

  function increment() {
    setCount((data) => data + 1);
  }

  function decrease() {
    if (count() === 0) {
      setCount((data) => (data = 0));
    } else {
      setCount((data) => data - 1);
    }
  }

  async function getPosts() {
    try {
      const response = await instance.get("posts?_limit=50");
      setData((data) => (data = response.data));
    } catch (err) {
      console.log(err.message);
    }
  }

  createEffect(async () => {
    await getPosts();
  });

  return (
    <div class="mx-auto container">
      <div class="container mx-auto font-bold mb-5 underline text-2xl">
        Create Signal {count()}
      </div>
      <div class="mb-10">
        <button
          class="px-4 py-1 text-white bg-slate-600 mx-2"
          onClick={increment}
        >
          Increment
        </button>
        <button
          class="px-4 py-1 text-white bg-slate-600 mx-2"
          onClick={decrease}
        >
          Decrease
        </button>
      </div>
      <div class="container mx-auto font-bold mb-5 underline text-2xl">
        Create Effect
      </div>
      <div>
        <Switch fallback={<div>Fetching</div>}>
          <Match when={Array.isArray(data())}>
            <Table data={JSON.stringify(data())} />
          </Match>
        </Switch>
      </div>
    </div>
  );
}
