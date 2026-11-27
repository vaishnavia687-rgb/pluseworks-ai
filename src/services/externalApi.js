
import { z } from "zod";

const API_URL = import.meta.env.VITE_PUBLIC_API_URL;

const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean()
});

export async function fetchExternalTasks(signal) {
  if (!API_URL) {
    throw new Error("API URL is not configured.");
  }

  const response = await fetch(
    `${API_URL}/todos?_limit=5`,
    { signal }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch external tasks.");
  }

  const data = await response.json();

  return z.array(todoSchema).parse(data);
}
