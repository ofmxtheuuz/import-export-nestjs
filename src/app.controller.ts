import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books/services/books.service';

@Controller()
export class AppController {
  constructor(private readonly bookService: BooksService) {}

  @Get()
  getHello() {
    return this.bookService.main();
  }
}
