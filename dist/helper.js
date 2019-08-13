"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
// import {Graphqli} from 'graphql';
const task_1 = __importDefault(require("./schemas/task"));
const project_1 = __importDefault(require("./schemas/project"));
const vendor_1 = require("./schemas/vendor");
function seedDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        const vendorRepository = typeorm_1.getRepository(vendor_1.Vendor);
        const taskRepository = typeorm_1.getRepository(task_1.default);
        const projectRepository = typeorm_1.getRepository(project_1.default);
        const defaultVendor = vendorRepository.create({
            id: 1,
            name: "defaultVendor"
        });
        const defaultProject = projectRepository.create({
            id: 1,
            name: "myTask"
        });
        yield projectRepository.save(defaultProject);
        const tasks = taskRepository.create([
            {
                id: 1,
                title: "",
                completed: false,
                project: defaultProject
            }
        ]);
        yield taskRepository.save(tasks);
        return {
            // defaultProject,
            defaultVendor
        };
    });
}
exports.seedDatabase = seedDatabase;
function RelationColumn(options) {
    return typeorm_1.Column(Object.assign({ nullable: true }, options));
}
exports.RelationColumn = RelationColumn;
//# sourceMappingURL=helper.js.map