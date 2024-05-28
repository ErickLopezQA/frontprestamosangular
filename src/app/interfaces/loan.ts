import { Client } from './client';

export interface Loan {
    id_loan?: number;
    client: Client;
    id_client: number;
    id_time_period: number;
    amount: number;
    interest_rate: number;
    total: number;
    createdAt: string;
}
