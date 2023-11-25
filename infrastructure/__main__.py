"""A Python Pulumi program"""

import sys
import json
import pulumi
from pulumi import automation as auto
import pulumi_cloudflare as cloudflare

import constants

config = pulumi.Config()

account_id = config.require('accountId')

# Pages project managing all configs
deployment_configs = cloudflare.PagesProject("deploymentConfigs",
                                                 account_id=account_id,
                                                 build_config=cloudflare.PagesProjectBuildConfigArgs(
                                                     build_command=constants.BUILD_CONFIG["BUILD_CMD"],
                                                     destination_dir=constants.BUILD_CONFIG["DESTINATION_DIR"],
                                                     root_dir=constants.BUILD_CONFIG["ROOT_DIR"],
                                                 ),
                                                 deployment_configs=cloudflare.PagesProjectDeploymentConfigsArgs(
                                                     preview=cloudflare.PagesProjectDeploymentConfigsPreviewArgs(
                                                         compatibility_flags=["nodejs_compat"],
                                                     ),
                                                     production=cloudflare.PagesProjectDeploymentConfigsProductionArgs(
                                                         compatibility_flags=["nodejs_compat"],
                                                     ),
                                                 ),
                                                 name="dsREview",
                                                 production_branch="main",
                                                 source=cloudflare.PagesProjectSourceArgs(
                                                     config=cloudflare.PagesProjectSourceConfigArgs(
                                                         deployments_enabled=True,
                                                         owner="curtis.robords@gmail.com",
                                                         production_branch="main",
                                                         production_deployment_enabled=True,
                                                         repo_name="dsReview",
                                                     ),
                                                     type="github",
                                                 ))

