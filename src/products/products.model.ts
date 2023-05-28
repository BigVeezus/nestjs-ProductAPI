export class Product {
  id: string;
  title: string;
  descripton: string;
  price: number;
  constructor(id: string, title: string, desc: string, price: number) {
    this.id = id;
    this.title = title;
    this.descripton = desc;
    this.price = price;
  }
}
