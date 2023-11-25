# dsReview


# High Level Package Structure

```
repository/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
├── infrastructure/
│   ├── cloudflare.tf
│   ├── terraform.tfstate
├── .gitignore
├── LICENSE
├── README.md
```

# Setup (Terraform)
After installing terraform (i.e. on mac with `brew install terraform`), in the `infrastructure` folder:

1. Add the `cloudflare.tf` file: It should have your required providers, your variables, and resources.
2. Initialize the directory with Terraform:
```commandline
terraform init
```
3. Apply your changes:
```commandline
terraform apply
```
4. If you make any changes to your infrastructure, be sure to update:
```commandline
terraform refresh
```

Helpful Resources:
* Managing Secrets: https://blog.gruntwork.io/a-comprehensive-guide-to-managing-secrets-in-your-terraform-code-1d586955ace1
* CloudFlare/Terraform: https://developers.cloudflare.com/terraform/tutorial/initialize-terraform/
* CloudFlare Pages/Terraform: https://registry.terraform.io/providers/cloudflare/cloudflare/latest/docs/resources/pages_project
* CloudFlare Pages Example with Terraform: https://blog.puvvadi.me/posts/cloudflare-pages-terraform/
