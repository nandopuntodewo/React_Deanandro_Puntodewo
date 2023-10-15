import React from "react";
import { useState } from "react";
import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default function Index() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content:
              "Create a question and answer system that responds to questions based on the given input text. Use the example text below as the input text. Translate the asnwer into the languange that the user input and start the answer with Question: fill with the user question and Answer: the answer of the question" +
              prompt,
          },
        ],
      });
      const choice = response.choices[0].message.content;
      setResult([choice]);
      console.log(result);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <div className="mt-5 border-2 bg-body-tertiary text-center  ">
        <h2 className="fw-bold ">Open AI</h2>
        <div class="input-group" className="mt-4 ">
          <span class="input-group-text">Enter Prompt Below</span>
          <textarea
            class="form-control"
            aria-label="With textarea"
            placeholder="Enter your prompt here"
            onChange={(e) => setPrompt(e.target.value)}
            value={prompt}
          ></textarea>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleSubmit}
            disabled={isLoading || prompt.length === 0}
          >
            {isLoading ? "Generating..." : "Generate"}
          </button>
        </div>
        <div>
          <p className="fw-bold ">OPEN AI</p>
          <p>{result}</p>
        </div>
      </div>
    </div>
  );
}
