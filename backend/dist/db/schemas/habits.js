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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHabitsTable = createHabitsTable;
const db_1 = __importDefault(require("../config/db"));
function createHabitsTable() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_1.default.query(`
        CREATE TABLE IF NOT EXISTS habits (
            id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
            user_id UUID,
            title VARCHAR(100) NOT NULL,
            description TEXT,
            frequency VARCHAR(50) NOT NULL,
            times_completed INT DEFAULT 0,
            streak INT DEFAULT 0,
            times_skipped INT DEFAULT 0,
            last_completed TIMESTAMP WITH TIME ZONE,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),

        CONSTRAINT fk_user
            FOREIGN KEY(user_id)
            REFERENCES users(id)
            ON DELETE CASCADE
        );
    `);
    });
}
