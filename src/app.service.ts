import { Injectable } from '@nestjs/common';
import { User } from './user.entity';
import { Category } from './category.entity';
import { Cost } from './cost.entity';

@Injectable()
export class AppService {

  USERS: User[] = [];
  CATEGORIES: Category[] = [];
  COSTS: Cost[] = [];
  createUser(newUser: User): any {
    let user = new User(newUser.id, newUser.name);
    this.USERS.push(user);
    console.log(this.USERS);
    
  }

  
  createCategory(newCategory: Category): any {
    let category = new Category(newCategory.id, newCategory.title)
    this.CATEGORIES.push(category);
    console.log(this.CATEGORIES); 
  }

  
  createCost(newCost: Cost): any {
    
      let cost = new Cost(newCost.id, newCost.userId, newCost.categoryId, newCost.sum);
      this.COSTS.push(cost);
      console.log(this.COSTS);
    
  }


  getCategories(): Category[] {
    return this.CATEGORIES;
  }

  getCostsByUserId(userId: any): Cost[] {
    let array: Cost[] = [];
    this.COSTS.forEach((item): void => {
      if (item.userId == +userId) {
        array.push(item);
      }
    })

    return array;
  }

  getCostsById(userId: number, categoryId: number): any {
    let array: any = [];
    
    this.COSTS.forEach((item): void => {
      if (item.userId == +userId && item.categoryId == +categoryId){
        array.push(item);
      }
    })
    return array;
    
  }
  
  newError(e: Error): string {
    console.log(e.message);
    return "Something is wrong with data"
  }
}
