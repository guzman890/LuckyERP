using System;
using System.Collections.Generic;

#nullable disable

namespace Entity.Models
{
    public class TbLibro
    {
        public int IdLibro { get; set; }
        public string Descripcion { get; set; }
        public int? Asignatura { get; set; }
        public int? Stock { get; set; }

        public virtual TbAsignatura AsignaturaNavigation { get; set; }
    }
}
