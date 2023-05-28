import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Body,
  BadRequestException,
  Param,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { PostDTO, ParamDTO } from './dto/post';
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
  getOneProduct(@Param() param: ParamDTO) {
    const product = this.productsService.getOneProduct(param.id);
    return product;
  }

  @Patch(':id')
  updateProduct(@Param() param: ParamDTO, @Body() body: PostDTO) {
    const id = param.id;
    this.productsService.updateProduct(
      id,
      body.title,
      body.description,
      body.price,
    );
    return { success: true, message: 'Updated' };
  }

  @Delete(':id')
  removeProduct(@Param() param: ParamDTO) {
    this.productsService.deleteProduct(param.id);
    return { success: true, message: 'Deleted' };
  }
}
