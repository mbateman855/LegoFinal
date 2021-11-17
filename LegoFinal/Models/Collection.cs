using System;
using System.Collections.Generic;

#nullable disable

namespace LegoFinal.Models
{
    public partial class Collection
    {
        public int CollectionId { get; set; }
        public int? SetId { get; set; } = 1;
        public string UserId { get; set; }
        public string name { get; set; }
        public string set_num { get; set; }
        public int? Quantity { get; set; }

        public virtual LegoSet Set { get; set; }
        public virtual AspNetUser User { get; set; }
    }
    public partial class CollectionwithUserName : Collection
    {
        public string UserName { get; set; }

    }
}
