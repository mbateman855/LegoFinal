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
    public class PartsResponseController : ControllerBase
    {
        //private readonly IPartsClient _partsClient;

        //public PartsResponseController(IPartsClient partsClient)
        //{
        //    _partsClient = partsClient;
        //}

        private readonly ILegoClient _legoClient;

        public PartsResponseController(ILegoClient legoClient)
        {
            _legoClient = legoClient;
        }


        // GET: api/<PartsResponseController>
        [HttpGet]
        public async Task<PartsResponse> GetParts()
        {
            var partsResponse = await _legoClient.GetPartsAsync();
            return partsResponse;
        }

        // GET api/<PartsResponseController>/5
        [HttpGet("{id}")]
        public async Task<PartsResponse> GetPartsInSet(string id)
        {
            var partsResults = await _legoClient.GetSetsPartsListAsync(id);
            return partsResults;
        }

        // POST api/<PartsResponseController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<PartsResponseController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<PartsResponseController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
