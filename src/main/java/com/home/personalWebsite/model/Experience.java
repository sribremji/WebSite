package com.home.personalWebsite.model;


import java.util.List;

public class Experience {
    private String title;
    private String company;
    private String duration;
    private List<String> responsibilities;

    public Experience(String title, String company, String duration, List<String> responsibilities) {
        this.title = title;
        this.company = company;
        this.duration = duration;
        this.responsibilities = responsibilities;
    }

    // Getters and Setters
    public String getTitle() { return title; }
    public String getCompany() { return company; }
    public String getDuration() { return duration; }
    public List<String> getResponsibilities() { return responsibilities; }

    public void setTitle(String title) { this.title = title; }
    public void setCompany(String company) { this.company = company; }
    public void setDuration(String duration) { this.duration = duration; }
    public void setResponsibilities(List<String> responsibilities) { this.responsibilities = responsibilities; }
}
