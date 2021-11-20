export class Sale {
    SaleID!: number;
    CustomerId!: number;
    ProductId!: number;
    Units!: number;
    EmailAddress!: string;

    build(content: any): Sale {
        Object.assign(this, content);

        return this;
    }
    

}
