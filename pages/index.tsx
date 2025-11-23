import type { FunctionComponent } from "renku";

import { Counter } from "../components/Counter";

const Index: FunctionComponent = () => (
  <div>
    <div>Hello, World!</div>
    <Counter start={0} />
  </div>
);

export default Index;
