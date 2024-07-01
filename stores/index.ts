import { defineStore } from "pinia";

interface AGENT_STORE_TYPE {}

export const useAgentStore = defineStore("agent", {
  state: (): AGENT_STORE_TYPE => ({}),
  actions: {},

  persist: process.client && {
    storage: localStorage,
    paths: [],
  },
});
