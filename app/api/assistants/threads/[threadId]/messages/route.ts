import { assistantId } from "@/app/assistant-config";
import { openai } from "@/app/openai";

export const maxDuration = 60; // This function can run for a maximum of 60 seconds
export const runtime = "nodejs";


// Send a new message to a thread
export async function POST(request, { params: { threadId } }) {
  const { content } = await request.json();

  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: assistantId,
  });

  return new Response(stream.toReadableStream());
}
