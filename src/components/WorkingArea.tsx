"use client";
import { useEffect, useState } from "react";
import TextArea from "./TextArea";
import { EBase64Mode, EConverter, encodeOptions } from "../constants/const";
import { formatJson, handle64Base, md5Converter } from "../utils";

export default function WorkingArea() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [selectedOption, setSelectedOption] = useState(encodeOptions[0]);
  const [base64Mode, setBase64Mode] = useState(EBase64Mode.ENCODE);

  useEffect(() => {
    switch (selectedOption) {
      case EConverter.BASE64:
        setResult(handle64Base(base64Mode, input));
        break;
      case EConverter.BASE64_IMAGE:
        setResult(input);
        break;
      case EConverter.JSON_FORMATTER:
        setResult(formatJson(input) as string);
        break;
      case EConverter.MD5_CONVERTER:
        setResult(md5Converter(input));
        break;
      default:
        break;
    }
  }, [input]);

  const handleSelectMode = (option: string) => {
    resetInput();
    setSelectedOption(encodeOptions.find((op) => op === option)!);
  };

  const resetInput = () => {
    setInput("");
    setResult("");
  };

  const handleChangeBase64Mode = () => {

    if (base64Mode !== EBase64Mode.ENCODE) {
      resetInput();
      setBase64Mode(EBase64Mode.ENCODE);
      return;
    }

    resetInput();
    setBase64Mode(EBase64Mode.DECODE);
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
              base64Mode === EBase64Mode.ENCODE && "bg-foreground text-background"
            }`}
            onClick={handleChangeBase64Mode}
          >
            Encode
          </div>
          <div
            className={`px-3.5 py-2 border rounded-lg ${
              base64Mode === EBase64Mode.DECODE && "bg-foreground text-background"
            }`}
            onClick={handleChangeBase64Mode}
          >
            Decode
          </div>
        </div>
      )}
      <div className="flex-center h-full gap-3 mt-4">
        <TextArea
          placeholder="Input"
          value={input}
          onChange={(e) => setInput(e)}
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
