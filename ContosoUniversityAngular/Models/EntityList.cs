using System;
using System.Collections.Generic;

namespace ContosoUniversityAngular.Models
{
	/// <summary>
	/// A class that holds a list of entities and a separate total that
	/// may or may not be the same as the count of the items.
	/// </summary>
	/// <remarks>
	/// Created to support grid paging which requires the original grand total
	/// count of items so it can determine how many "pageSize" pages will be needed.
	/// </remarks>
	public class EntityList
    {
		public List<BaseEntity> ListOfItems { get; set; }
		public int TotalItems { get; set; }

	    public EntityList()
	    {
		    ListOfItems = new List<BaseEntity>();
	    }

	}
}
