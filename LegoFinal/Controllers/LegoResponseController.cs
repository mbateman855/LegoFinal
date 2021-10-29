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
        private readonly LegoClient _legoClient;

        public LegoResponseController(LegoClient legoClient)
        {
            _legoClient = legoClient;
        }

        // GET: api/<LegoResponseController>
        [HttpGet]
        public async Task<string> Get()
        {
            //rename this method to be more specific
            return await _legoClient.getLegos();
        }

        // GET api/<LegoResponseController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

    }
}
