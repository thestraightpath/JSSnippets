		var arr = ["REM123", "REM456"], filtered;
    filtered = arr.filter(function (x) { 
			var gA = new GlideAggregate("u_remediation_task");
			gA.addQuery("u_parent.u_number", x);
			gA.addAggregate("COUNT");
			gA.query();
			gA.next();
			return gA.getAggregate("COUNT") == 0;
		});		
