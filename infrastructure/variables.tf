variable "cloudflare_api_token" {
  type = string
  sensitive = true
}

variable "cloudflare_account_id" {
  type = string
  sensitive = true
}

variable "zone" {
  default = "datainthewild.com"
}

variable "zone_id" {
  type = string
  sensitive = true
}
