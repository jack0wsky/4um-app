import { defineStore } from "pinia";

export const useThreadsStore = defineStore("threads", {
  state: () => ({
    searchPhrase: "",
  }),
  actions: {
    updateSearchPhrase(phrase: string) {
      this.searchPhrase = phrase;
    },
  },
});
