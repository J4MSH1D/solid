import { createEffect, For } from "solid-js";

export function Table({ data }) {
  return (
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">
                    #
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-4">
                    Body
                  </th>
                </tr>
              </thead>
              <tbody>
                <For each={JSON.parse(data)} fallback={<div>Загрузка...</div>}>
                  {(item) => (
                    <tr class="border-b dark:border-neutral-500">
                      <td class="whitespace-nowrap px-6 py-4 font-medium">
                        {item.id}
                      </td>
                      <td class="whitespace-nowrap px-6 py-4">{item.title}</td>
                      <td class="whitespace-nowrap px-6 py-4">{item.body}</td>
                    </tr>
                  )}
                </For>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
