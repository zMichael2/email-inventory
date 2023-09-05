"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const emailAuthConfirme_router_1 = __importDefault(require("./src/routers/emailAuthConfirme.router"));
exports.app = (0, express_1.default)();
const PORT = process.env.PORT;
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.json());
exports.app.use(emailAuthConfirme_router_1.default);
exports.app.get("/", (req, res) => {
    res.status(200).json({ message: "Api rest email notification initialized " });
});
exports.app.listen(PORT, () => {
    console.log("Initialized Server!!!");
});
