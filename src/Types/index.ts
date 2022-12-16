interface Department {
    codigo: number,
    nome: string,
    amigavel: string,
}

interface Manufacturer {
    codigo: number,
    nome: string,
}

interface Category {
    codigo: number,
    nome: string,
    amigavel: string,
}

interface SubCategory {
    codigo: number,
    nome: string,
    amigavel: string,
}

interface Product {
    codigo: number,
    nome: string,
    link: string,
    departamento: Department,
    categoria: Category,
    sub_categoria: SubCategory,
    fabricante: Manufacturer,
    variacao_precos: PriceVariation[]
}

interface PriceVariation {
    preco_original: number,
    preco_prime: number,
    preco_desconto: number,
    preco_desconto_prime: number,
    quantidade: number,
    created_at: string,
}

export type {Product, Category, SubCategory, PriceVariation, Manufacturer, Department}
