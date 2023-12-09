
resource "cloudflare_worker_script" "dsreview_api" {
  account_id = var.cloudflare_account_id
  content = file("dsreview_api.js")
  name = "dsreviewworker"
}

resource "cloudflare_worker_route" "catch_all_route" {
  zone_id = var.zone_id
  pattern = "*${var.zone}/api/*"
  depends_on = [cloudflare_worker_script.dsreview_api]
}

/* Next:
Configure Cloudflare Page Rules:
1. Go to the Cloudflare dashboard and navigate to the "Page Rules" section.
2. Add a new page rule for your domain.
3. Set the pattern to match the specific route (e.g., example.com/specific-route/*).
4. Add the "Forwarding URL" setting and enter the URL of your Cloudflare Pages site.
*/