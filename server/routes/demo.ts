import { RequestHandler } from "express";
import { DemoResponse } from "@shared/api";

export const handleDemo: RequestHandler = (req, res) => {
  const response: DemoResponse = {
    message: "Hello from wasky_links i'll get back to you in the next 24 hours. Thank you for contacting me ",
  };
  res.status(200).json(response);
};
