using LegoFinal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace LegoFinal.Services
{
    public class PartsClient : IPartsClient
    {
        private readonly HttpClient _httpClient;

        public PartsClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<PartsResponse> GetPartsAsync()
        {
            var response = await _httpClient.GetAsync("lego/parts/");
            var jsonResponse = await response.Content.ReadAsStringAsync();
            var partsResponse = JsonSerializer.Deserialize<PartsResponse>(jsonResponse);

            return partsResponse;
        }
    }
}
