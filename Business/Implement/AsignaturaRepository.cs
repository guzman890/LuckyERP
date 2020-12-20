using Business.Interfaces;
using System;
using System.Collections.Generic;
using System.Text;
using Data.Context;
using Entity.Models;
using System.Linq;

namespace Business.Implement
{
    public class AsignaturaRepository : BaseRepository, IAsignaturaRepository
    {
        public AsignaturaRepository(DataBaseContext ctx) : base(ctx) { }

        public bool Exists(int id)
        {
            try
            {
                return ctx.TbAsignaturas.Where(x => x.IdAsig == id).Any();
            }
            catch (Exception ex)
            {
                throw ex;
            }          

        }

        public List<TbAsignatura> FindAll()
        {
            try
            {
                return ctx.TbAsignaturas.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbAsignatura FindById(int id)
        {
            try
            {
                return ctx.TbAsignaturas.Where( x => x.IdAsig == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbAsignatura Save(TbAsignatura tbAsignatura)
        {
            try
            {
                ctx.TbAsignaturas.Add(tbAsignatura);

                ctx.SaveChanges();

                return ctx.TbAsignaturas.Where(x=> x.IdAsig==tbAsignatura.IdAsig).SingleOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbAsignatura Update(TbAsignatura tbAsignatura)
        {
            try
            {
                TbAsignatura found = ctx.TbAsignaturas.Where(x=> x.IdAsig==tbAsignatura.IdAsig).FirstOrDefault();

                found.Descripcion = tbAsignatura.Descripcion;
                found.Estado = tbAsignatura.Estado;

                ctx.Update(found);

                ctx.SaveChanges();

                return ctx.TbAsignaturas.Where(x => x.IdAsig == tbAsignatura.IdAsig).SingleOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbAsignatura Delete(int IdAsig)
        {
            try
            {
                TbAsignatura found = ctx.TbAsignaturas.Where(x => x.IdAsig == IdAsig).FirstOrDefault();

                ctx.Remove(found);

                ctx.SaveChanges();

                return found;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}
