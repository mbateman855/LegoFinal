using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace LegoFinal.Services
{
    public class LegoClient
    {
        private readonly HttpClient _httpClient;

        public LegoClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<string> getLegos()
        {
            return string.Empty;
        }
    }
}
