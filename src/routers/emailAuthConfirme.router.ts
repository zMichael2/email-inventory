import { Router } from "express";
import { emailCodeNotification } from "../controllers/emailAuthConfirme.controllers";

const emailNotificationAuth = Router();

emailNotificationAuth.post("/api/emailcode", emailCodeNotification);

export default emailNotificationAuth;
