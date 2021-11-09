using LegoFinal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LegoFinal.Services
{
    public interface IPartsClient
    {
        Task<PartsResponse> GetPartsAsync();
    }
}
