export class PartsResponse {
  count: number;
  next: string;
  previous: object;
  results: PartsResult[];

}

export class PartsResult {
  id: number;
  inv_part_id: number;
  part: Part;
  color: Color;
  set_num: string;
  quantity: number;
  is_spare: boolean;
  element_id: string;
  num_sets: number;
}

export class Part {
  part_num: string;
  name: string;
  part_cat_id: number;
  part_url: string;
  part_img_url: string;
  external_ids: External_Ids;
  print_of: object;
}

export class External_Ids {
  BrickOwl: string[];
  LDraw: string[];
  BrickLink: string[];
  Brickset: string[];
  LEGO: string[];
}

export class Color {
  id: number;
  name: string;
  rgb: string;
  is_trans: boolean;
  external_ids: External_Ids1;
}

export class External_Ids1 {
  BrickLink: Bricklink;
  BrickOwl: Brickowl;
  LEGO: LEGO;
  Peeron: Peeron;
  LDraw: Ldraw;
}

export class Bricklink {

  ext_ids: number[];
  ext_descrs: string[][];
}

export class Brickowl {

  ext_ids: number[];
  ext_descrs: string[][];
}

export class LEGO {

  ext_ids: number[];
  ext_descrs: string[][];
}

export class Peeron {

  ext_ids: number[];
  ext_descrs: string[][];
}

export class Ldraw {

  ext_ids: number[];
  ext_descrs: string[][];
}
