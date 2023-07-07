import { Location } from './Location';
import { Ticket } from "./Ticket";

export interface Event {
    id?: string;
    title?: string;
    organization?: string;
    status?: string;
    favorite?: boolean;
    urlImage?: string;
    dateStart?: string;
    dateEnd?: string;
    description?: string;
    location?: Location;
    ticket?: Ticket;
}