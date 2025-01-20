terraform {
  required_providers {
    cloudflare = {
      source = "cloudflare/cloudflare"
      version = "~> 4"
    }
  }
}

provider "cloudflare" {
  api_token = var.cloudflare_api_token
}

# Pages project managing all configs
resource "cloudflare_pages_project" "deployment_configs" {
  account_id        = var.cloudflare_account_id
  name              = "dsreview"
  production_branch = "main"

  source {
    type = "github"
    config {
      owner                         = "robords"
      repo_name                     = "dsReview"
      production_branch             = "main"
      pr_comments_enabled           = true
      deployments_enabled           = true
      production_deployment_enabled = true
      preview_deployment_setting    = "custom"
      preview_branch_includes       = ["dev", "preview"]
      preview_branch_excludes       = ["main", "prod"]
    }
  }

  build_config {
    build_command       = "npx @cloudflare/next-on-pages@1"
    destination_dir     = ".vercel/output/static"
    root_dir            = "frontend"
  }

  deployment_configs {
    preview {
      environment_variables = {
        ENVIRONMENT = "preview"
      }
      compatibility_flags = ["nodejs_compat"]
    }
    production {
      environment_variables = {
        ENVIRONMENT = "production"
      }
      compatibility_flags = ["nodejs_compat"]
    }
  }
}

resource "cloudflare_record" "dsreviewcname" {
  zone_id = var.zone_id
  name    = "@"
  value   = "dsreview.pages.dev"
  type    = "CNAME"
  ttl     = 3600
}

resource "cloudflare_pages_domain" "dsreviewdomain" {
  account_id   = var.cloudflare_account_id
  project_name = "dsreview"
  domain       = var.zone
}

resource "cloudflare_worker_script" "hello_world" {
  name = "hello-world-worker"
  content = file("workers/hello-world.js")
}

resource "cloudflare_worker_route" "hello_world_route" {
  pattern = "hello.datainthewild.com/*"  # or "datainthewild.com/hello/*"
  script_name = cloudflare_worker_script.hello_world.name
}