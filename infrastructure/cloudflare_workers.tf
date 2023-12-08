
resource "cloudflare_worker_script" "dsreview_api" {
  account_id = var.cloudflare_account_id
  content = file("dsreview_api.js")
  name = "dsreviewworker"
}

resource "cloudflare_worker_route" "catch_all_route" {
  zone_id = var.zone_id
  pattern = "${var.zone}/api/*"
  depends_on = [cloudflare_worker_script.dsreview_api]
}