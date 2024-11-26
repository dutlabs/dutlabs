frappe.provide("frappe.ui.misc");
frappe.ui.misc.about = function () {
	if (!frappe.ui.misc.about_dialog) {
		var d = new frappe.ui.Dialog({ title: __("Dut Labs ERP") });

		$(d.body).html(
			repl(
				`<div>
					<p><i class='fa fa-globe fa-fw'></i>
						${__("Website")}:
						<a href='https://dutlabs.com' target='_blank'>https://dutlabs.com</a></p>
					<p><i class='fa fa-github fa-fw'></i>
						${__("Source")}:
						<a href='https://github.com/dutlabs' target='_blank'>https://github.com/dutlabs</a></p>
					<p><i class='fa fa-linkedin fa-fw'></i>
						Linkedin: <a href='https://linkedin.com/company/dut-labs' target='_blank'>https://linkedin.com/company/dut-labs</a></p>
					<hr>
					<h4>${__("Installed Apps")}</h4>
					<div id='about-app-versions'>${__("Loading versions...")}</div>
					</div>`,
				frappe.app
			)
		);

		frappe.ui.misc.about_dialog = d;
    }
    frappe.ui.misc.about_dialog.show();
}
