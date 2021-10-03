package com.csye7220.assignment3webapp.controller;

import com.csye7220.assignment3webapp.model.Sentence;
import com.csye7220.assignment3webapp.model.Sentiment;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class SentimentController {
    @Value("${assignment3webapp.logic.api}")
    private String logicApi;

    @PostMapping("/sentiment")
    public Sentiment sentimentAnalysis(@RequestBody Sentence sentence) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(logicApi + "/analyse/sentiment",
                        sentence, Sentiment.class)
                .getBody();
    }

    @GetMapping("/")
    public String homePage() {
        return "Spring Boot Sentiment Analysis Web API";
    }

    @GetMapping("/my-name")
    public String myName() {
        return "My Name is Priyam";
    }
}
