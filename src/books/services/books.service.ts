import { Injectable } from "@nestjs/common";


@Injectable()
export class BooksService {

  main(): Array<Object> {
    return [
      {
        nome: "Harry Potter e a Pedra Filosofal",
        release_year: 2002
      },
      {
        nome: "Harry Potter e a Câmara Secreta",
        release_year: 2003
      },
      {
        nome: "Harry Potter e o Prisioneiro de Azkaban",
        release_year: 2005
      }
    ]
  }
}