import { toast } from "@zerodevx/svelte-toast";
export const Toast = (type: string = "success", msg: string = "") => {
  let types = {
    success: {
      "--toastBackground": "#48BB78",
      "--toastBarBackground": "#2F855A",
    },
    danger: {
      "--toastBackground": "#F56565",
      "--toastBarBackground": "#C53030",
    },
  };

  let theme = types[type];
  toast.push(msg, { theme });
};
