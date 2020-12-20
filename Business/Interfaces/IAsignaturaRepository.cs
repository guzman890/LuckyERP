using System;
using Entity.Models;
using System.Collections.Generic;
using System.Text;

namespace Business.Interfaces
{
    public interface IAsignaturaRepository
    {
        bool Exists(int id);
        TbAsignatura FindById(int id);
        List<TbAsignatura> FindAll();
        TbAsignatura Save(TbAsignatura tbAsignatura);
        TbAsignatura Update(TbAsignatura tbAsignatura);
        TbAsignatura Delete(int id);
    }
}
