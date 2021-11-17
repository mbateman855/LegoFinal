using LegoFinal.Models;
using LegoFinal.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace LegoFinal.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LegoResponseController : ControllerBase
    {
        private readonly ILegoClient _legoClient;

        public LegoResponseController(ILegoClient legoClient)
        {
            _legoClient = legoClient;
        }

        // GET: api/<LegoResponseController>
        [HttpGet]
        public async Task<LegoResponse> GetSets()
        {
            var legoResponse = await _legoClient.GetLegosAsync();
            //rename this method to be more specific
            return legoResponse;
        }

        // GET api/<LegoResponseController>/5
        [HttpGet("{id}")]
        public async Task<Result> GetSetDetails(string id)
        {
            var legoDetails = await _legoClient.GetLegoDetails(id);
            //var setId = legoDetails.results.All(legoDetails.results.set_num == id);

            return legoDetails;
        }

        //[HttpGet("{query}")]
        //public async Task<LegoResponse> GetSearchSets(string query)
        //{
        //    var legoResponse = await _legoClient.GetSearchSetsAsync(query);
        //    //rename this method to be more specific
        //    return legoResponse;
        //}
    }
}
