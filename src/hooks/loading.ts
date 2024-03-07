import { ref } from "vue";

export default function useLoading(initLoading = false) {
  const loading = ref(initLoading);
  const setLoading = (val: boolean) => {
    loading.value = val;
  };

  return {
    loading,
    setLoading
  };
}