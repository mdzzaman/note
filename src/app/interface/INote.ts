export interface INote {
    id: number;
    title: string;
    category_id: number;
    description?: string;
    doc_id?: string;
    is_star?: boolean;
    is_done?: boolean;
}