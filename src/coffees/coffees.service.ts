import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
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

  findAll() {
    return this.coffees;
  }

  findOne(id: number) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      // throw new HttpException(`Coffee #${id} not found`,HttpStatus.NOT_FOUND);
      throw new NotFoundException(`Coffee #${id} not found`);
    }
    return coffee;
  }

  create(createCoffeeDto: any) {
    this.coffees.push(createCoffeeDto);
    return createCoffeeDto;
  }

  update(id: number, updateCoffeeDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      // update
    }
  }

  remove(id: number) {
    const index = this.coffees.findIndex((item) => item.id === +id);
    if (index === -1) {
      throw new Error(`Coffee #${id} not found`);
    }
    this.coffees.splice(index, 1);
  }
}
