using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LegoFinal.Models
{

    public class PartsResponse
    {
        public int count { get; set; }
        public object next { get; set; }
        public object previous { get; set; }
        public PartsResult[] results { get; set; }
    }

    public class PartsResult
    {
        public int id { get; set; }
        public int inv_part_id { get; set; }
        public Part part { get; set; }
        public Color color { get; set; }
        public string set_num { get; set; }
        public int quantity { get; set; }
        public bool is_spare { get; set; }
        public string element_id { get; set; }
        public int num_sets { get; set; }
    }

    public class Part
    {
        public string part_num { get; set; }
        public string name { get; set; }
        public int part_cat_id { get; set; }
        public string part_url { get; set; }
        public string part_img_url { get; set; }
        public External_Ids external_ids { get; set; }
        public object print_of { get; set; }
    }

    public class External_Ids
    {
        public string[] BrickOwl { get; set; }
        public string[] LDraw { get; set; }
        public string[] BrickLink { get; set; }
        public string[] Brickset { get; set; }
        public string[] LEGO { get; set; }
    }

    public class Color
    {
        public int id { get; set; }
        public string name { get; set; }
        public string rgb { get; set; }
        public bool is_trans { get; set; }
        public External_Ids1 external_ids { get; set; }
    }

    public class External_Ids1
    {
        public Bricklink BrickLink { get; set; }
        public Brickowl BrickOwl { get; set; }
        public LEGO LEGO { get; set; }
        public Peeron Peeron { get; set; }
        public Ldraw LDraw { get; set; }
    }

    public class Bricklink
    {
        public int[] ext_ids { get; set; }
        public string[][] ext_descrs { get; set; }
    }

    public class Brickowl
    {
        public int[] ext_ids { get; set; }
        public string[][] ext_descrs { get; set; }
    }

    public class LEGO
    {
        public int[] ext_ids { get; set; }
        public string[][] ext_descrs { get; set; }
    }

    public class Peeron
    {
        public object[] ext_ids { get; set; }
        public string[][] ext_descrs { get; set; }
    }

    public class Ldraw
    {
        public int[] ext_ids { get; set; }
        public string[][] ext_descrs { get; set; }
    }
}
