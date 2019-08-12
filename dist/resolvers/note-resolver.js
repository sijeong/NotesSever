"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const type_graphql_1 = require("type-graphql");
const note_1 = require("../schemas/note");
let default_1 = class default_1 {
    notes() {
        return data_1.notes;
    }
    getNote(id) {
        return data_1.notes.find(note => note.id === id);
    }
    editContent(id, content) {
        const note = data_1.notes.find(note => {
            return note.id === id;
        });
        if (!note) {
            throw new Error(`Couldn't find note with id ${id}`);
        }
        return note;
    }
};
__decorate([
    type_graphql_1.Query(returns => [note_1.default]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], default_1.prototype, "notes", null);
__decorate([
    type_graphql_1.Query(returns => note_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Object)
], default_1.prototype, "getNote", null);
__decorate([
    type_graphql_1.Mutation(returns => note_1.default),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Object)
], default_1.prototype, "editContent", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => note_1.default)
], default_1);
exports.default = default_1;
//# sourceMappingURL=note-resolver.js.map