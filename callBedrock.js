// AWS authentication config: simply copy paste this into the terminal
// export AWS_DEFAULT_REGION="us-west-2"
// export AWS_ACCESS_KEY_ID="ASIAS565SE75DOD6IPLQ"
// export AWS_SECRET_ACCESS_KEY="Yt+11+unBOc9lc2SNlW7ArnpauVa2+MqZLoG9pk2"
// export AWS_SESSION_TOKEN="IQoJb3JpZ2luX2VjEO7//////////wEaCXVzLWVhc3QtMSJHMEUCIAYTrIcT7lQPihvsu+7TR9OBwP3vGrSGsjdf3bzBzk++AiEA3YMzCB+SpzsWjC4gd+7vgBMTguSFOIb1iYbDCWpDXlIqmQIIZxAAGgwyMDE3OTEyNTI0NzQiDCaGtfRhtnUiIY1+pyr2AV4UPOuUz2QUb5WUh9sOy7jRzDRxUdgeWi+NPuGULArW9gvr3mYY4TliOyanBWQTbWIQvVRLyCSy/eNGqyzSVMbuJpR6wfWlQNDHrLyeG53nFoETDaDKtNBzOne9LLHRxVXXaELAB2dQG15mx2ZhYhlXi7wnT6JrYbXeA/2P70zNHOcfXd9U6GtzaqmR4bUGTw9h5ohARDyf0qQfsvIB5VGVY9q+R1reOWW/K+YudsmSre4wpJUhQp9B+6aWcPdRhfIT+ISGP1DKIPG9CsAgbqrMuPl1ezTWD8YNXvPFWNKr59vMcrqUAdCAvIjNC2R92aGinafYhjDd1LmyBjqdAaCi+U4kxCV5u3VUW4K43my/3D3p36ALgh97L4ISYu+dTlOVB5yAwOhfJpqaL4KTv/7bW3ARg5EbFgvTy/dtKdH88v0PraoEZ7nnCNOTRDilg6qfyYCgMbvbJoXus+VHdQQ4Vovs+6tVc7HyJxFeeBbNsbyiVjNvGcCRqm0VB3UhT7TKzJb7TUnFWSfCu0IBZmlSa4oUJ2ohVVLHO/c="


import {
  BedrockRuntimeClient,
  InvokeModelCommand,
} from "@aws-sdk/client-bedrock-runtime";

// Create a Bedrock Runtime client in the AWS Region of your choice.
const client = new BedrockRuntimeClient({ region: "us-west-2" });

// Set the model ID, e.g., Llama 3 8B Instruct.
const modelId = "meta.llama3-70b-instruct-v1:0";

// Define the user message to send.
const userMessage =
  "Describe the purpose of a 'hello world' program in one sentence.";

// Embed the message in Llama 3's prompt format.
const prompt = `
<|begin_of_text|>
<|start_header_id|>user<|end_header_id|>
${userMessage}
<|eot_id|>
<|start_header_id|>assistant<|end_header_id|>
`;

// Format the request payload using the model's native structure.
const request = {
  prompt,
  // Optional inference parameters:
  max_gen_len: 512,
  temperature: 0.5,
  top_p: 0.9,
};

// Encode and send the request.
const response = await client.send(
  new InvokeModelCommand({
    contentType: "application/json",
    body: JSON.stringify(request),
    modelId,
  }),
);

// Decode the native response body.
/** @type {{ generation: string }} */
const nativeResponse = JSON.parse(new TextDecoder().decode(response.body));

// Extract and print the generated text.
const responseText = nativeResponse.generation;
console.log(responseText);

// Learn more about the Llama 3 prompt format at:
// https://llama.meta.com/docs/model-cards-and-prompt-formats/meta-llama-3/#special-tokens-used-with-meta-llama-3
// snippet-end:[javascript.v3.bedrock-runtime.InvokeModel_Llama3_Quickstart]
