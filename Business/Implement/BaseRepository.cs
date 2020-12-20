using Data.Context;
using System;
using System.Collections.Generic;
using System.Text;

namespace Business.Implement
{
    public class BaseRepository
    {
        protected readonly DataBaseContext ctx;

        public BaseRepository(DataBaseContext ctx)
        {
            this.ctx = ctx;
        }
    }
}
