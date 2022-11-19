import { Controller, Get, Post, Body, Param, Query, ValidationPipe, UsePipes } from '@nestjs/common';

import { AppService } from './app.service';
import { User } from './user/user.entity';
import { Category } from './category/category.entity';
import { Cost } from './cost/cost.entity';
import { CreateUserDto } from './user/create-user.dto';
import { CreateCategoryDto } from './category/create-category.dto';
import { CreateCostDto } from './cost/create-cost.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('new-user')
  @UsePipes(new ValidationPipe({ transform: true}))
  createUser(@Body('user') user: CreateUserDto): any {
    try {
      this.appService.createUser(user);
    } catch (e) {
      return e.message;
    }
  };

  @Post('new-category')
  @UsePipes(new ValidationPipe({ transform: true}))
  createCategory(@Body('new-category') newCategory: CreateCategoryDto): any {
    try {
      this.appService.createCategory(newCategory);
    } catch (e) {
      return this.appService.newError(e);
    }
  }
 
  @Post('new-cost')
  @UsePipes(new ValidationPipe({ transform: true}))
  createCost(@Body('new-cost') newCost: CreateCostDto): any{
    
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
