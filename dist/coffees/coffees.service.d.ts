import { Coffee } from './entities/coffee.entity';
export declare class CoffeesService {
    private coffees;
    findAll(): Coffee[];
    findOne(id: number): Coffee;
    create(createCoffeeDto: any): any;
    update(id: number, updateCoffeeDto: any): void;
    remove(id: number): void;
}
