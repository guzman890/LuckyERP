using Business.Interfaces;
using Data.Context;
using Entity.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Business.Implement
{
    public class LibroRepository : BaseRepository, ILibroRepository
    {
        public LibroRepository(DataBaseContext ctx) : base(ctx) { }

        public bool Exists(int id)
        {
            try
            {
                return ctx.TbLibros.Where(x => x.IdLibro == id).Any();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public List<TbLibro> FindAll()
        {
            try
            {
                return ctx.TbLibros.ToList();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbLibro FindById(int id)
        {
            try
            {
                return ctx.TbLibros.Where(x => x.IdLibro == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbLibro Save(TbLibro tbLibro)
        {
            try
            {
                ctx.TbLibros.Add(tbLibro);

                ctx.SaveChanges();

                return ctx.TbLibros.Where(x => x.IdLibro == tbLibro.IdLibro).SingleOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbLibro Update(TbLibro tbLibro)
        {
            try
            {
                TbLibro found = ctx.TbLibros.Where(x => x.IdLibro == tbLibro.IdLibro).FirstOrDefault();

                found.Descripcion = tbLibro.Descripcion;
                found.Asignatura = tbLibro.Asignatura;
                found.Stock = tbLibro.Stock;

                ctx.Update(found);

                ctx.SaveChanges();

                return ctx.TbLibros.Where(x => x.IdLibro == tbLibro.IdLibro).SingleOrDefault();
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        public TbLibro Delete(int IdLibro)
        {
            try
            {
                TbLibro found = ctx.TbLibros.Where(x => x.IdLibro == IdLibro).FirstOrDefault();

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
