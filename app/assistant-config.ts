export let assistantId = "asst_Mq1XtOJENEw7DkY2g6562O7s"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
