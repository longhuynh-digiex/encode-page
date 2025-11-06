export enum EConverter {
  BASE64 = "Base 64",
  BASE64_IMAGE = "Base 64 Image",
  JSON_FORMATTER = "JSON Formatter",
  MD5_CONVERTER = "MD5 Converter"
}

export enum EBase64Mode {
  ENCODE = "Encode",
  DECODE = "Decode",
}

export const encodeOptions = [
  EConverter.BASE64,
  EConverter.BASE64_IMAGE,
  EConverter.JSON_FORMATTER,
  EConverter.MD5_CONVERTER,
];

export const emptyImage =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNgYAAAAAMAASsJTYQAAAAASUVORK5CYII=";
