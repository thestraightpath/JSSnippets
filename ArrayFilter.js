	* Used during the child remediation task selections. 
	*
	*/
	encodedPreQuery: function () {
		var arr = [],
			filtered,
			encQuery,
			grr = new GlideAggregate("u_remediation_task");
		grr.addEncodedQuery("u_rt_stateIN1,2,3,7^u_parentISEMPTY^u_streamISNOTEMPTY");
		grr.addQuery("u_number", "!=", this.parent.u_number);
		grr.addQuery("u_unauth_soft_prod_id", this.parent.u_unauth_soft_prod_id);
		grr.addQuery("u_stream", this.parent.u_stream);
		grr.groupBy("u_number");
		grr.addAggregate("COUNT");		
		grr.query();
		while (grr.next()) {
			arr.push(grr.getValue("u_number"));
		}
		filtered = arr.filter(function (x) { // filter out existing parents
			var gA = new GlideAggregate("u_remediation_task");
			gA.addQuery("u_parent.u_number", x);
			gA.addAggregate("COUNT");
			gA.query();
			gA.next();
			return gA.getAggregate("COUNT") == 0;
		});		
		encQuery = "u_numberIN" + filtered.join(",");
		return encQuery;
	},
	
