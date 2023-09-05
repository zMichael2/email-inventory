"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailCodeNotification = void 0;
const emailAuthConfirme_service_1 = require("../services/emailAuthConfirme.service");
const mailOption_helpers_1 = require("../helpers/mailOption.helpers");
const emailCodeNotification = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, code, type } = req.body;
        const message = (0, mailOption_helpers_1.maipOption)(type, email, code);
        yield (0, emailAuthConfirme_service_1.sendEmail)(message);
        res.status(200).json({ message: "The mail has been sent successfully" });
    }
    catch (e) {
        res.status(400).json({ message: e });
    }
});
exports.emailCodeNotification = emailCodeNotification;
