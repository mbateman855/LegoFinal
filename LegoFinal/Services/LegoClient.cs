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

        //string apiUrl = ""

        public LegoClient(HttpClient httpClient)
        {
            _httpClient = httpClient;
        }

        public async Task<LegoResponse> GetLegosAsync()
        {
            //use the http client to get the response
            var response = await _httpClient.GetAsync("lego/sets/");
            //or if it's a simple get request
            //Sends request, get request and format in one
            //var response = await _httpClient.GetStringAsync("people");

            //grab the json from the response content
            var jsonResponse = await response.Content.ReadAsStringAsync();

            //deserialize our json and converting it to our model
            var legoResponse = JsonSerializer.Deserialize<LegoResponse>(jsonResponse);

            return legoResponse;
            
        }
    }
}
