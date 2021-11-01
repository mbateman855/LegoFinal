using System;
using System.Collections.Generic;

#nullable disable

namespace LegoFinal.Models
{
    public partial class LegoSet
    {
        public LegoSet()
        {
            Collections = new HashSet<Collection>();
            WishLists = new HashSet<WishList>();
        }

        public int SetId { get; set; }
        public string Setnumber { get; set; }
        public string SetName { get; set; }
        public int? NumofPieces { get; set; }

        public virtual ICollection<Collection> Collections { get; set; }
        public virtual ICollection<WishList> WishLists { get; set; }
    }
}
