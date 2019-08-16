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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_1 = require("../data");
const type_graphql_1 = require("type-graphql");
const project_1 = __importDefault(require("../schemas/project"));
const typeorm_typedi_extensions_1 = require("typeorm-typedi-extensions");
const typeorm_1 = require("typeorm");
const task_1 = __importDefault(require("../schemas/task"));
let default_1 = class default_1 {
    constructor(projectRepository, taskRepository) {
        this.projectRepository = projectRepository;
        this.taskRepository = taskRepository;
    }
    projects() {
        return this.projectRepository.find();
    }
    project(name) {
        return this.projectRepository.findOne(name);
    }
    tasks(projectData) {
        return data_1.tasks.filter(t => {
            return t.project_id === projectData.id;
        });
    }
};
__decorate([
    type_graphql_1.Query(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], default_1.prototype, "projects", null);
__decorate([
    type_graphql_1.Query(returns => project_1.default, { nullable: true }),
    __param(0, type_graphql_1.Arg("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], default_1.prototype, "project", null);
__decorate([
    type_graphql_1.FieldResolver(),
    __param(0, type_graphql_1.Root()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], default_1.prototype, "tasks", null);
default_1 = __decorate([
    type_graphql_1.Resolver(of => project_1.default),
    __param(0, typeorm_typedi_extensions_1.InjectRepository(project_1.default)),
    __param(1, typeorm_typedi_extensions_1.InjectRepository(task_1.default)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository])
], default_1);
exports.default = default_1;
