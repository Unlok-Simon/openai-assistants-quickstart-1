import { openai } from "@/app/openai";

export const maxDuration = 60; // This function can run for a maximum of 60 seconds
export const runtime = "nodejs";

// Create a new thread
export async function POST() {
  const thread = await openai.beta.threads.create();
  return Response.json({ threadId: thread.id });
}
