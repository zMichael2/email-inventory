import { changeConfirmedHtml } from "../resource/changeConfirmedHtml";
import { changeVerificateHtml } from "../resource/changeVerificateHtml";
import { emailConfirmed } from "../resource/emailConfirmedHtml";
import { emailVerificateHtml } from "../resource/emailVerificateHtml";

export const maipOption = (type: string, email: string, code: string) => {
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
        html: emailConfirmed(email, code),
      });
      return mailOptions;
    case "verificateConfirmed":
      Object.assign(mailOptions, {
        subject: "Verified account ✔",
        html: emailVerificateHtml(),
      });
      return mailOptions;
    case "changePassword":
      Object.assign(mailOptions, {
        subject: "Confirmation to change password✔",
        html: changeConfirmedHtml(email, code),
      });
      return mailOptions;
    case "changeConfirmation":
      Object.assign(mailOptions, {
        subject: "change confirmation✔",
        html: changeVerificateHtml(),
      });
      return mailOptions;
    default:
      return mailOptions;
  }
};
