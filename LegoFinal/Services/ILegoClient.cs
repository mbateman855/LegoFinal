﻿using LegoFinal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LegoFinal.Services
{
    public interface ILegoClient
    {
        Task<LegoResponse> GetLegosAsync();
        Task<PartsResponse> GetSetsPartsListAsync(int id);
        Task<PartsResponse> GetPartsAsync();
    }
}
