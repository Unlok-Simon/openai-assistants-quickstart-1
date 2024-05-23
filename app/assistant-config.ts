export let assistantId = "asst_TejC3ORRpXrdwZkbDTrBVOfl"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
