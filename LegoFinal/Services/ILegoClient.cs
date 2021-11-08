using LegoFinal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LegoFinal.Services
{
    public interface ILegoClient
    {
        Task<LegoResponse> GetLegosAsync();
        Task<Result> GetLegoDetails(string id);
        Task<PartsResponse> GetPartsAsync();
        Task<PartsResponse> GetSetsPartsListAsync(string id);
    }
}
