export type Book = {
    id: string,
    title: string,
    subtitle: string
    description: string,
    authors: string,
    publisher: string
    pages: number
    year: number
    image: string
    url: string
}

export type BriefBook = Omit<Book, "description" | "publisher" | "pages" | "year" | "author">
