"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const emailAuthConfirme_controllers_1 = require("../controllers/emailAuthConfirme.controllers");
const emailNotificationAuth = (0, express_1.Router)();
emailNotificationAuth.post("/api/emailcode", emailAuthConfirme_controllers_1.emailCodeNotification);
exports.default = emailNotificationAuth;
