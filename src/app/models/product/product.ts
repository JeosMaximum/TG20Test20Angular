export class Product {
    ProductId!: number;
    Name!: string;
    Weight!: number;
    Price!: number;

    build(content: any): Product {
        Object.assign(this, content);

        return this;
    }
}
