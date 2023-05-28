import {
  Controller,
  Post,
  Get,
  Body,
  BadRequestException,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { PostDTO } from './dto/post';
import { error } from 'console';

@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Post()
  addProduct(@Body() body: PostDTO) {
    if (!body.description || !body.title || !body.price) {
      throw new BadRequestException(error);
    }
    const title = this.productsService.insertProduct(
      body.title,
      body.description,
      body.price,
    );
    return { title };
  }

  @Get()
  getAllProducts() {
    const products = this.productsService.getAllProducts();
    return products;
  }

  @Get(':id')
  getOneProduct(@Param('id') prodId: string) {
    const product = this.productsService.getOneProduct(prodId);
    return product;
  }
}
