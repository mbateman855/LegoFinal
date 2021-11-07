using LegoFinal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace LegoFinal.Services
{
    public class LegoClient : ILegoClient
    {
        private readonly HttpClient _httpClient;

        public LegoClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<LegoResponse> GetLegosAsync()
        {
            var response = await _httpClient.GetAsync("lego/sets/");
            var jsonResponse = await response.Content.ReadAsStringAsync();
            var legoResponse = JsonSerializer.Deserialize<LegoResponse>(jsonResponse);

            return legoResponse;
        }

        public async Task<PartsResponse> GetSetsPartsListAsync(int id)
        {
            var response = await _httpClient.GetAsync($"lego/sets/{id}/parts/");
            var jsonResponse = await response.Content.ReadAsStringAsync();
            var partsResponse = JsonSerializer.Deserialize<PartsResponse>(jsonResponse);

            return partsResponse;
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
