import { Request, Response } from "express";
import { sendEmail } from "../services/emailAuthConfirme.service";
import { maipOption } from "../helpers/mailOption.helpers";

export const emailCodeNotification = async (req: Request, res: Response) => {
  try {
    const { email, code, type } = req.body;

    console.log(email, "--------------------------");

    const message = maipOption(type, email, code);
    await sendEmail(message);
    res.status(200).json({ message: "The mail has been sent successfully" });
  } catch (e) {
    res.status(400).json({ message: e });
  }
};
