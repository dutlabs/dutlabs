import frappe


def disable_onboarding(_):
	onboarding_modules = frappe.get_all("Module Onboarding")

	for module in onboarding_modules:
		frappe.db.set_value("Module Onboarding", module["name"], "is_complete", 1)

	frappe.db.set_single_value("System Settings", "enable_onboarding", 0)
	frappe.clear_cache()
	frappe.db.commit()
