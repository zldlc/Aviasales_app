export interface IFlightInfo {
  origin: string;
  destination: string;
  date: string;
  stops: string[];
  duration: number;
}

export interface ITicket {
  price: number;
  carrier: string;
  segments: IFlightInfo[];
}

export interface ISearchTickets {
  tickets: ITicket[];
  stop: boolean;
}
