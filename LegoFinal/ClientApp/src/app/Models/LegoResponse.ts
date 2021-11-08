export class LegoResponse {
  count: number;
  next: string;
  previous: object;
  results: Results[];
}

export class Results {
  set_num: string;
  name: string;
  year: number;
  theme_id: number;
  num_parts: number;
  set_img_url: string;
  set_url: string;
  last_modified_dt: Date;
}
