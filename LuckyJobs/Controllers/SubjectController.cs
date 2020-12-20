using Business.Interfaces;
using Entity.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LuckyJobs.Controllers
{

    [Route("api/subject")]
    [ApiController]
    public class SubjectController : Controller
    {
        private readonly IAsignaturaRepository repository;

        public SubjectController(IAsignaturaRepository repository)
        {
            this.repository = repository;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TbAsignatura>>> FindAll()
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
        public ActionResult<TbAsignatura> FindById(int id)
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
        public ActionResult<TbAsignatura> Update(int id, TbAsignatura tbAsignatura)
        {
            try
            {
                if (this.repository.Exists(id))
                {
                    return this.repository.Update(tbAsignatura);

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
        public ActionResult<TbAsignatura> Create(TbAsignatura tbAsignatura)
        {
            try
            {
                return this.repository.Save(tbAsignatura);
            }
            catch (Exception ex)
            {
                return BadRequest();
            }
        }

        [HttpDelete("{id}")]
        public ActionResult<TbAsignatura> Delete(int id)
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
