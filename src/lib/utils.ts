import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { toast } from "react-toastify";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Define the valid toast types as a union type
type ToastType = "success" | "error" | "info" | "warning";

export const showToast = (message: string, type: ToastType) => {
  // Now TypeScript knows that `type` can only be one of the valid types
  toast[type](message, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    style: {
      backgroundColor: type === "success" ? "#48bb78" : "#f56565",
      color: "#fff",
    },
    className: `custom-toast-${type}`,
  });
};