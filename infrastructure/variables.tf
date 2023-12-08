variable "cloudflare_api_token" {
  type = string
  sensitive = true
  default="TF_VAR_cloudflare_api_token"
}

variable "cloudflare_account_id" {
  type = string
  sensitive = true
  default="TF_VAR_cloudflare_account_id"
}

variable "zone" {
  default = "datainthewild.com"
}

variable "zone_id" {
  default = "4b997d7ddad02aba90a90e90230cf12b"
}
