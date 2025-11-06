"use client";
import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import { encodeOptions } from "../constants/const";
import { formatJson, handle64Base, md5Converter } from "../utils/utils";

export default function WorkingArea() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>();
  const [selectedOption, setSelectedOption] = useState(encodeOptions[0]);
  const [base64Mode, setBase64Mode] = useState("Encode");

  useEffect(() => {
    switch (selectedOption) {
      case "Base 64":
        setResult(handle64Base(base64Mode, input));
        break;
      case "Base 64 Image":
        setResult(input);
        break;
      case "JSON Formatter":
        setResult(formatJson(input));

        break;
      case "MD5 Converter":
        setResult(md5Converter(input));
        break;
      default:
        break;
    }
  }, [input]);

  const handleSelectMode = (option: string) => {
    resetInput();
    setSelectedOption(option);
  };
  const resetInput = () => {
    setInput("");
    setResult("");
  };

  return (
    <div className="">
      <div className="flex justify-evenly items-center">
        {encodeOptions.map((option) => (
          <div
            key={option}
            className={`cursor-pointer ${
              selectedOption === option && "underline"
            }`}
            onClick={() => handleSelectMode(option)}
          >
            {option}
          </div>
        ))}
      </div>
      {selectedOption === encodeOptions[0] && (
        <div className="flex-center gap-2 mt-4">
          <div
            className={`px-3.5 py-2 border rounded-lg ${
              base64Mode === "Encode" && "bg-foreground text-background"
            }`}
            onClick={() => {
              if (base64Mode !== "Encode") {
                resetInput();
                setBase64Mode("Encode");
              }
            }}
          >
            Encode
          </div>
          <div
            className={`px-3.5 py-2 border rounded-lg ${
              base64Mode === "Decode" && "bg-foreground text-background"
            }`}
            onClick={() => {
              if (base64Mode !== "Decode") {
                resetInput();
                setBase64Mode("Decode");
              }
            }}
          >
            Decode
          </div>
        </div>
      )}
      <div className="flex-center h-full gap-3 mt-4">
        <TextArea
          placeholder="Input"
          value={input}
          setValue={setInput}
        />
        <TextArea
          isImage={selectedOption === "Base 64 Image"}
          placeholder="Result"
          value={result}
          disabled={true}
        />
      </div>
    </div>
  );
}
