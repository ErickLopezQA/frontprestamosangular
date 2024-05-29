import { Client } from './client';

export interface Loan {
    id_loan?: number;
    client: Client;
    id_client: number;
    id_amount: number;
    id_time_period: number;
    createdAt: string;
}
