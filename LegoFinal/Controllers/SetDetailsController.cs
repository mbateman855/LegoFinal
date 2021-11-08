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
    public class SetDetailsController : ControllerBase
    {
        private readonly ILegoClient _legoClient;

        public SetDetailsController(ILegoClient legoClient)
        {
            _legoClient = legoClient;
        }

        // GET: api/<SetDetailsController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<SetDetailsController>/5
        [HttpGet("{id}")]
        public async Task<Result> Get(string id)
        {
            var detailsResponse = await _legoClient.GetLegoDetails(id);
            return detailsResponse;
        }

        // POST api/<SetDetailsController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<SetDetailsController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<SetDetailsController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
