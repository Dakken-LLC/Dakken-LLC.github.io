"use server";

const ENDPOINT = import.meta.env.VITE_ENDPOINT as string;

if (!ENDPOINT) {
  throw new Error("ENDPOINT is not defined");
}

export async function notify(text: string) {
  return fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ content: text }),
  });
}
