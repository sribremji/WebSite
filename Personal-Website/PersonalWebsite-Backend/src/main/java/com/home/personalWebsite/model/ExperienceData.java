package com.home.personalWebsite.model;

import java.util.Arrays;
import java.util.List;

public class ExperienceData {

	public static List<Experience> getAll() {
		return List.of(

				new Experience("Senior Software Development Specialist", "LTIMindtree", "Oct 2024 – Present",
						Arrays.asList(
								"As a Senior Software Development Specialist at LTIMindtree, I led the development and maintenance of scalable Java Spring Boot applications, ensuring system resilience and performance at scale. I designed end-to-end RESTful APIs consumed by cross-functional frontend teams, significantly reducing API response time and system latency.",
								"I also implemented CI/CD pipelines using Jenkins, automating test, build, and deployment workflows. This transformation minimized manual interventions, cut deployment time by over 40%, and enhanced production stability. My role extended to infrastructure provisioning using Terraform on AWS, where I integrated monitoring via CloudWatch to maintain system health and uptime.")),

				new Experience("DevOps Engineer", "Genesys", "Dec 2023 – Oct 2024", Arrays.asList(
						"At Genesys, I worked as a DevOps Engineer focused on improving cloud integration and automation. I built and supported microservices in Java and Spring Boot that operated seamlessly across AWS and Azure environments. This enabled cross-cloud compatibility and enhanced failover mechanisms.",
						"I also created Java-based automation scripts for artifact synchronization and deployment. My collaboration with QA and product teams improved release confidence by building Concourse pipelines that ensured consistent quality in delivery. I was instrumental in enforcing best coding practices and improving unit test coverage.")),

				new Experience("Development Engineer 3", "Comcast", "Jan 2019 – Dec 2023", Arrays.asList(
						"During my tenure at Comcast as Development Engineer 3, I was responsible for building highly available Spring Boot applications used by millions of users. I introduced architectural improvements that led to a 21% reduction in production defects. I used Redis and MongoDB to enhance caching and data access efficiency.",
						"One of my key achievements was leading the migration of legacy systems to AWS cloud. I implemented services using ECS, Lambda, and API Gateway, which resulted in a 30% reduction in infrastructure costs. I also built Terraform modules for repeatable infrastructure deployments and automated end-to-end testing using Concourse pipelines.")),

				new Experience("DevOps Engineer", "Tata Consultancy Services", "Jan 2016 – Jan 2019", Arrays.asList(
						"As a DevOps Engineer at Tata Consultancy Services, I engineered automation solutions for cloud infrastructure, reducing server provisioning and scaling times. I scripted deployments using AWS CLI and Shell Scripting that enabled auto-scaling groups, resulting in a $150K annual cost saving.",
						"My other major contribution was streamlining CI/CD processes using Jenkins and Bitbucket. I built scripts to automate PR creation, test execution, merging, and deployment cycles, thereby improving developer productivity and reducing errors during release cycles. I integrated Artifactory to manage build artifacts efficiently and securely.")));
	}

}
