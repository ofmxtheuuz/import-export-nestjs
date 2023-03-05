import { Module } from "@nestjs/common";
import { BooksService } from "./services/books.service";


@Module({
  providers: [
    BooksService
  ],
  exports: [BooksService]
})
export class BooksModule {}