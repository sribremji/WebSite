package com.home.personalWebsite.model;

import java.util.List;

public class Contact {
    private String email;
    private String phone;
    private String location;
    private List<String> languages;

    public Contact(String email, String phone, String location, List<String> languages) {
        this.email = email;
        this.phone = phone;
        this.location = location;
        this.languages = languages;
    }

    // Getters and Setters
    public String getEmail() { return email; }
    public String getPhone() { return phone; }
    public String getLocation() { return location; }
    public List<String> getLanguages() { return languages; }

    public void setEmail(String email) { this.email = email; }
    public void setPhone(String phone) { this.phone = phone; }
    public void setLocation(String location) { this.location = location; }
    public void setLanguages(List<String> languages) { this.languages = languages; }
}