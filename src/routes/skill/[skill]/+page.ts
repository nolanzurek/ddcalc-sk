import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  // TODO: using a slash on the straight skills leads to routing
  return { skill: params.skill };
};
