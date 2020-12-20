using System;
using System.Collections.Generic;

#nullable disable

namespace Entity.Models
{
    public class TbAsignatura
    {
        public TbAsignatura()
        {
            TbLibros = new HashSet<TbLibro>();
        }

        public int IdAsig { get; set; }
        public string Descripcion { get; set; }
        public bool? Estado { get; set; }

        public virtual ICollection<TbLibro> TbLibros { get; set; }
    }
}
