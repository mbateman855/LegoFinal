using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LegoFinal.Models
{

    public class LegoResponse
    {
        public int count { get; set; }
        public string next { get; set; }
        public object previous { get; set; }
        public Result[] results { get; set; }
    }

    public class Result
    {
        public string part_num { get; set; }
        public string name { get; set; }
        public int part_cat_id { get; set; }
        public string part_url { get; set; }
        public string part_img_url { get; set; }
        public External_Ids external_ids { get; set; }
        public string print_of { get; set; }
    }

    public class External_Ids
    {
        public string[] BrickLink { get; set; }
        public string[] BrickOwl { get; set; }
        public string[] Brickset { get; set; }
        public string[] LEGO { get; set; }
        public string[] LDraw { get; set; }
    }

}
