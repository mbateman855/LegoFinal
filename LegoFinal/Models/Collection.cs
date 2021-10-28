using System;
using System.Collections.Generic;

#nullable disable

namespace LegoFinal.Models
{
    public partial class Collection
    {
        public int CollectionId { get; set; }
        public int? SetId { get; set; }
        public string UserId { get; set; }
        public string SetName { get; set; }
        public string SetNumber { get; set; }
        public int? Quantity { get; set; }

        public virtual LegoSet Set { get; set; }
        public virtual AspNetUser User { get; set; }
    }
}
