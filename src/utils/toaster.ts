import { toaster } from "@/components/ui/toaster";

export function notifyNotImplemented() {
  toaster.create({
    title: "Not Implemented",
    description: "This feature is not implemented yet.",
    type: "error",
  });
}

export function notifySending() {
  toaster.create({
    title: "Sending",
    description: "Sending your message...",
    type: "info",
  });
}

export function notifySuccess() {
  toaster.create({
    title: "Success",
    description: "Your message has been sent successfully.",
    type: "success",
  });
}

export function notifyError() {
  toaster.create({
    title: "Error",
    description: "Failed to send your message.",
    type: "error",
  });
}
