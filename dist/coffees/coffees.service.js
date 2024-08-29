"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoffeesService = void 0;
const common_1 = require("@nestjs/common");
let CoffeesService = class CoffeesService {
    constructor() {
        this.coffees = [
            {
                id: 1,
                name: 'spanish coffee',
                brand: 'Buena Cafe',
                flavors: ['vanilla', 'chocolate', 'coffee'],
            },
            {
                id: 2,
                name: 'english coffee',
                brand: 'Buena Cafe',
                flavors: ['vanilla', 'chocolate', 'coffee'],
            },
        ];
    }
    findAll() {
        return this.coffees;
    }
    findOne(id) {
        const coffee = this.coffees.find((item) => item.id === +id);
        if (!coffee) {
            throw new common_1.NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }
    create(createCoffeeDto) {
        this.coffees.push(createCoffeeDto);
        return createCoffeeDto;
    }
    update(id, updateCoffeeDto) {
        const existingCoffee = this.findOne(id);
        if (existingCoffee) {
        }
    }
    remove(id) {
        const index = this.coffees.findIndex((item) => item.id === +id);
        if (index === -1) {
            throw new Error(`Coffee #${id} not found`);
        }
        this.coffees.splice(index, 1);
    }
};
exports.CoffeesService = CoffeesService;
exports.CoffeesService = CoffeesService = __decorate([
    (0, common_1.Injectable)()
], CoffeesService);
//# sourceMappingURL=coffees.service.js.map