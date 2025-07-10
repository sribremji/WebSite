package com.home.personalWebsite.model;

import java.util.List;
import java.util.Map;

public class Resume {
    private String name;
    private String title;
    private String summary;
    private List<String> skills;
    private List<Experience> experiences;
    private Contact contact;
    private Map<String, String> skillDetails;


    public Resume(String name, String title, String summary, List<String> skills,
                  List<Experience> experiences, Contact contact, Map<String, String> skillDetails) {
        this.name = name;
        this.title = title;
        this.summary = summary;
        this.skills = skills;
        this.experiences = experiences;
        this.contact = contact;
        this.skillDetails = skillDetails;
    }

    // Getters and Setters
    public String getName() { return name; }
    public String getTitle() { return title; }
    public String getSummary() { return summary; }
    public List<String> getSkills() { return skills; }
    public List<Experience> getExperiences() { return experiences; }
    public Contact getContact() { return contact; }
    public Map<String, String> getSkillDetails() { return skillDetails; }

    public void setName(String name) { this.name = name; }
    public void setTitle(String title) { this.title = title; }
    public void setSummary(String summary) { this.summary = summary; }
    public void setSkills(List<String> skills) { this.skills = skills; }
    public void setExperiences(List<Experience> experiences) { this.experiences = experiences; }
    public void setContact(Contact contact) { this.contact = contact; }
    public void setSkillDetails(Map<String, String> skillDetails) { this.skillDetails = skillDetails; }

}