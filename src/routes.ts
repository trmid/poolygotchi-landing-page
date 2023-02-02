import HomeSvelte from "./routes/Home.svelte";
import NotFoundSvelte from "./routes/NotFound.svelte";
import StatsSvelte from "./routes/Stats.svelte";

export const routes = {
  "/stats": StatsSvelte,
  "/": HomeSvelte,
  "*": NotFoundSvelte
};