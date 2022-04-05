using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using PmenosLab.Models;
using System.Linq;
using AutoMapper;

namespace PmenosLab.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CommentController : ControllerBase
    {

        private ModelContext _context;
        private IMapper _mapper;

        public CommentController(ModelContext context, IMapper mapper) {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public IEnumerable<Comment> ListAll()
        {
            return _context.Comments;
        }

        [HttpGet("{id}")]
        public IActionResult findById(int id) {
            Comment comment = _context.Comments.FirstOrDefault(comment => comment.Id == id);

            if(comment != null) {
                Comment commentDto = _mapper.Map<Comment>(comment);
                return Ok(commentDto);
            }

            return NotFound();
        }

        [HttpPost]
        public IActionResult Create([FromBody] Comment commentDto) {
            Comment comment = _mapper.Map<Comment>(commentDto);
            _context.Comments.Add(comment);
            _context.SaveChanges();

            return CreatedAtAction(nameof(findById), new { Id = comment.Id }, comment);
        }
    }
}
