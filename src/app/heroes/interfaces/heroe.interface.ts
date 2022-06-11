export interface Usuario {
  email: string;
  contrasenia: string;
}

// To parse this data:
//
//   import { Convert, Welcome } from "./file";
//
//   const welcome = Convert.toWelcome(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  etag: string;
  data: Data;
}

export interface Data {
  offset: number;
  limit: number;
  total: number;
  count: number;
  results: Heroe[];
}
export interface Heroe {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: Thumbnail;
}

export interface Thumbnail {
  path: string;
  extension: string;
}
