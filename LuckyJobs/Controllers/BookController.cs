using Business.Interfaces;
using Entity.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LuckyJobs.Controllers
{
    [Route("api/book")]
    [ApiController]
    public class BookController : Controller
    {
        private readonly ILibroRepository repository;

        public BookController(ILibroRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TbLibro>>> FindAll()
        {
            try
            {
                return this.repository.FindAll();
            }
            catch (Exception ex)
            {
                return BadRequest();
            }

        }

        [HttpGet("{id}")]
        public ActionResult<TbLibro> FindById(int id)
        {
            try
            {
                if (this.repository.Exists(id))
                {
                    return this.repository.FindById(id);
                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }

        }

        [HttpPut("{id}")]
        public ActionResult<TbLibro> Update(int id, TbLibro tbLibro)
        {
            try
            {
                if (this.repository.Exists(id))
                {
                    return this.repository.Update(tbLibro);

                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpPost]
        public ActionResult<TbLibro> Create(TbLibro tbLibro)
        {
            try
            {
                return this.repository.Save(tbLibro);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<TbLibro> Delete(int id)
        {
            try
            {
                if (this.repository.Exists(id))
                {
                    return this.repository.Delete(id);

                }
                else
                {
                    return BadRequest();
                }
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }
    }
}
