"use client";
import { createSignal, type FunctionComponent } from "renku";
import { hello } from "../functions/hello";

export const Counter: FunctionComponent<{ start: number }> = ({ start }) => {
  const counter = createSignal(start);

  return (
    <div>
      <button
        type="button"
        onclick={async () => {
          counter.set(counter.get() + 1);
          console.log("Calling server function now");

          const response = await hello("Hello");
          console.log("Response from server:", response);
        }}
      >
        Counter: {String(counter.get())}
      </button>
    </div>
  );
};
