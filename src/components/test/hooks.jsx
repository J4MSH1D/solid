// Components
import { Table } from "./table";
// Methods
import { createEffect, createSignal, on, Switch, Match } from "solid-js";
import instance from "../../plugins/axios";

export function Hooks() {
  const [data, setData] = createSignal(null);

  async function getPosts() {
    try {
      const response = await instance.get("posts?_limit=10");
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
