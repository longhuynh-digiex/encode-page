"use client";
import Image from "next/image";
import React, { useState } from "react";
import { emptyImage } from "../constants/const";

export default function TextArea({
  placeholder = "Text",
  className,
  value,
  setValue,
  disabled = false,
  isImage = false,
}: {
  placeholder?: string;
  className?: string;
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string>>;
  disabled?: boolean;
  isImage?: boolean;
}) {
  const [copy, setCopy] = useState(false);
  const handleCopy = async () => {
    setCopy(true);
    navigator.clipboard.writeText(value ?? "");
    await new Promise(() => setTimeout(() => setCopy(false), 500));
  };
  return (
    <>
      <div className="w-full h-[200px] relative">
        {isImage ? (
          <div className="w-full">
            <Image
              className="border-2 rounded-xl border-foreground object-contain"
              src={value ? "data:" + value : emptyImage}
              alt="base64 Image"
              fill
            />
          </div>
        ) : (
          <>
            <textarea
              disabled={disabled}
              value={value}
              onChange={(e) => (setValue ? setValue(e.target.value) : "")}
              className={`border border-foreground rounded-xl p-3 w-full h-[200px] text-start resize-none  ${className}`}
              placeholder={placeholder}
            />
            <div
              className="bg-foreground absolute right-3 bottom-5 cursor-pointer p-1 rounded-full"
              onClick={handleCopy}
            >
              {copy ? (
                <Image
                  src={"/check.svg"}
                  width={16}
                  height={16}
                  alt="copy"
                />
              ) : (
                <Image
                  src={"/copy.svg"}
                  width={16}
                  height={16}
                  alt="copy"
                />
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
