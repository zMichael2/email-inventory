"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maipOption = void 0;
const changeConfirmedHtml_1 = require("../resource/changeConfirmedHtml");
const changeVerificateHtml_1 = require("../resource/changeVerificateHtml");
const emailConfirmedHtml_1 = require("../resource/emailConfirmedHtml");
const emailVerificateHtml_1 = require("../resource/emailVerificateHtml");
const maipOption = (type, email, code) => {
    let mailOptions = {
        from: '"Auth Api"<elmaik3121@gmail.com>',
        subject: "",
        html: "",
        to: `${email}`,
    };
    switch (type) {
        case "verificate":
            Object.assign(mailOptions, {
                subject: "Verify your account ✔",
                html: (0, emailConfirmedHtml_1.emailConfirmed)(email, code),
            });
            return mailOptions;
        case "verificateConfirmed":
            Object.assign(mailOptions, {
                subject: "Verified account ✔",
                html: (0, emailVerificateHtml_1.emailVerificateHtml)(),
            });
            return mailOptions;
        case "changePassword":
            Object.assign(mailOptions, {
                subject: "Confirmation to change password✔",
                html: (0, changeConfirmedHtml_1.changeConfirmedHtml)(email, code),
            });
            return mailOptions;
        case "changeConfirmation":
            Object.assign(mailOptions, {
                subject: "change confirmation✔",
                html: (0, changeVerificateHtml_1.changeVerificateHtml)(),
            });
            return mailOptions;
        default:
            return mailOptions;
    }
};
exports.maipOption = maipOption;
