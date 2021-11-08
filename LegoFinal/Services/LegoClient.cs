using LegoFinal.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
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

        public async Task<Result> GetLegoDetails(string id)
        {
            
            var response = await _httpClient.GetAsync($"lego/sets/{id}/");
            var jsonResponse = await response.Content.ReadAsStringAsync();
            var detailResponse = JsonSerializer.Deserialize<Result>(jsonResponse);

            return detailResponse;
        }

        public async Task<PartsResponse> GetPartsAsync()
        {
            var response = await _httpClient.GetAsync("lego/parts/");
            var jsonResponse = await response.Content.ReadAsStringAsync();
            var partsResult = JsonSerializer.Deserialize<PartsResponse>(jsonResponse);

            return partsResult;
        }

        public async Task<PartsResponse> GetSetsPartsListAsync(string id)
        {
            var response = await _httpClient.GetAsync($"lego/sets/{id}/parts/");
            var jsonResponse = await response.Content.ReadAsStringAsync();
            var partsResponse = JsonSerializer.Deserialize<PartsResponse>(jsonResponse);

            return partsResponse;
        }

    }
}
