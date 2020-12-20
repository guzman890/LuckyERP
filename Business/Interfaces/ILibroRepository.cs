using System;
using Entity.Models;
using System.Collections.Generic;
using System.Text;

namespace Business.Interfaces
{
    public interface ILibroRepository
    {
        bool Exists(int id);
        TbLibro FindById(int id);
        List<TbLibro> FindAll();
        TbLibro Save(TbLibro tbAsignatura);
        TbLibro Update(TbLibro tbAsignatura);
        TbLibro Delete(int id);
    }
}
