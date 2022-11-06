import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './user.entity';
import { Category } from './category.entity';
import { Cost } from './cost.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('new-user')
  createUser(@Body('user') user: User): any {
    try {
      this.appService.createUser(user);
    } catch (e) {
      return e.message;
    }
  };

  @Post('new-category')
  createCategory(@Body('new-category') newCategory: Category): any {
    try {
      this.appService.createCategory(newCategory);
    } catch (e) {
      return this.appService.newError(e);
    }
  }
 
  @Post('new-cost')
  
  createCost(@Body('new-cost') newCost: Cost): any{
    
    try {
      this.appService.createCost(newCost);
    } catch (e) {
      return this.appService.newError(e);
    }
  }
  
  @Get('categories')
  
  getCategories(): Category[] {
    return this.appService.getCategories();
  } 

  
  @Get(":id")
  getCostsByUserId(@Param('id') id: number): any {
    try {
      return this.appService.getCostsByUserId(id);
    } catch (e) {
      return this.appService.newError(e);
    }
  }
  
  @Get()
  getCostsById(@Query() query: any): any{
    
    try {
      
      return this.appService.getCostsById(query.userId, query.categoryId);
    } catch (e) {
      return this.appService.newError(e);
    }
  }
}
