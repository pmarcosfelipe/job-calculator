import { writable } from "svelte/store";

const createApp = (data: any)=>{

  const app = writable(data)

  return app;
}

export const app = createApp({
  // page: "home"
  page: "profile"
})

