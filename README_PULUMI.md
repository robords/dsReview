# dsReview


# High Level Package Structure

```
repository/
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
├── infrastructure/
│   ├── __main__.py (Pulumi program)
│   ├── Pulumi.yaml  
│   ├── requirements.txt   
├── .gitignore
├── LICENSE
├── README.md
```

# Setup (Pulumi)
In the `infrastructure` folder:
1. Add the following to requirements.txt:

```
pulumi==3.94.2
semver==2.13.0
pulumi-cloudflare>=5.0,<6.0 
```
2. Set up your venv:
```
python3 -m venv ~/.venv/dsReviewInfrastructure
```
3. (optional) Add a shortcut to your venv:
In ~./zshrc:
```
alias dsr="cd ~/Documents/projects/dsReview/infrastructure && source ~/.venv/dsReviewInfrastructure/bin/activate"
```
Then run:
```
source  ~./zshrc
dsr
```
(`dsr` activates venv, otherwise run `source ~/.venv/dsReviewInfrastructure/bin/activate`)
4. Install requirements in venv:
```
pip3 install -r requirements.txt
```
4. Freeze requirements
```
pip freeze > requirements.txt
```
5. Test CloudFlare and pulumi packages work:
Add the following to `__main__.py`
```python
import pulumi
import pulumi_cloudflare as cloudflare
```
Then execute `__main__.py` by running `python3 __main__.py`
