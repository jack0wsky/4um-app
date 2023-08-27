import { useThreadsStore } from "@/stores/threads";
import { watch, ref } from "vue";
import { threads } from "@/database/threads";
import { storeToRefs } from "pinia";

export const useThreadsList = () => {
  const store = useThreadsStore();
  const { searchPhrase } = storeToRefs(store);
  const filteredThreads = ref(threads);

  watch(searchPhrase, () => {
    filteredThreads.value = threads.filter(
      ({ title, description }) =>
        title.toLowerCase().includes(searchPhrase.value) ||
        description.toLowerCase().includes(searchPhrase.value),
    );
  });

  return { filteredThreads };
};
