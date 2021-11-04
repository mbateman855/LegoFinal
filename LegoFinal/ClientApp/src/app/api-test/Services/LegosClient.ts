import { HttpClient } from "@angular/common/http";

export class LegosClient {
  apiUrl: string = 'https://rebrickable.com/api/v3/lego/sets/'
  constructor(private httpClient: HttpClient) { }
}
