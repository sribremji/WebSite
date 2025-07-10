package com.home.personalWebsite.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.home.personalWebsite.config.SkillConfig;
import com.home.personalWebsite.model.Contact;
import com.home.personalWebsite.model.Experience;
import com.home.personalWebsite.model.ExperienceData;
import com.home.personalWebsite.model.Resume;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/resume")
@CrossOrigin(origins = "http://localhost:5173")
public class ResumeController {

    @Autowired
    private SkillConfig skillConfig;

    @GetMapping
    public Resume getResume() {
    	// ✅ Load skill details from YAML
        Map<String, String> skillDetails = skillConfig.getEntries();

        List<String> skills = Arrays.asList(
            "Java", "SpringBoot", "AWS", "Terraform", "Jenkins",
            "MongoDB", "Redis", "CICD", "GoLang", "Python",
            "Concourse", "Shell_Scripting"
        );

        List<Experience> experiences = ExperienceData.getAll();

        Contact contact = new Contact(
            "sribremji1994@gmail.com",
            "+91 9500456828",
            "Puducherry, PY 605004, India",
            Arrays.asList("English", "Tamil", "French")
        );

        String summary = "    Hi, I'm Sri Bremji, a passionate Software Engineer with over 8 years of experience spanning software development and DevOps. "
            + "I specialize in building scalable backend systems using Java and Spring Boot, combined with deep expertise in AWS cloud architecture. "
            + "My focus is on delivering robust microservices, automating CI/CD pipelines using Jenkins and Concourse, and managing infrastructure as code through Terraform. "
            + "Having worked with companies like Comcast, T-Mobile, Genesys, and LTIMindtree, I bring a blend of engineering excellence, agility, and a mindset for continuous learning. "
            + "I'm driven by the idea of creating solutions that are not just efficient but also elegant and maintainable. Let's build something impactful together!";

        

        return new Resume("Sri Bremji", "Senior Software Engineer / DevOps Specialist",
                summary, skills, experiences, contact, skillDetails);
    }
}