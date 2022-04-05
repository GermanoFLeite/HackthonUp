using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PmenosLab.Models;
using System.Linq;
using AutoMapper;

namespace PmenosLab.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SubscriptionController : ControllerBase
    {

        private ModelContext _context;
        private IMapper _mapper;

        public SubscriptionController(ModelContext context, IMapper mapper) {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<Subscription> ListAll()
        {
            return _context.Subscriptions;
        }

        [HttpGet("{id}")]
        public IActionResult findById(int id) {
            Subscription subscription = _context.Subscriptions.FirstOrDefault(subscription => subscription.Id == id);

            if(subscription != null) {
                Subscription subscriptionDto = _mapper.Map<Subscription>(subscription);
                return Ok(subscriptionDto);
            }

            return NotFound();
        }

        [HttpPost]
        public IActionResult Create([FromBody] Subscription subscriptionDto) {
            Subscription subscription = _mapper.Map<Subscription>(subscriptionDto);
            _context.Subscriptions.Add(subscription);
            _context.SaveChanges();

            return CreatedAtAction(nameof(findById), new { Id = subscription.Id }, subscription);
        }
    }
}
