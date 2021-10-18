package com.csye7220.assignment4javaserver.controller;

import com.csye7220.assignment4javaserver.model.Sentence;
import com.csye7220.assignment4javaserver.model.Sentiment;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
@CrossOrigin
public class SentimentController {
    @Value("${assignment4webapp.logic.api}")
    private String logicApi;

    @PostMapping("/sentiment")
    public Sentiment sentimentAnalysis(@RequestBody Sentence sentence) {
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.postForEntity(logicApi + "/analyse/sentiment", sentence, Sentiment.class)
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

    @GetMapping("/health")
    public String testHealth() {
        return "Hello from Java Sentiment Analysis Springboot App! God bless you!";
    }

    @GetMapping("/testComms")
    public String testComms() {
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String> result =
                restTemplate.getForEntity(logicApi + "/health", String.class);
        return result.getBody();
    }

    @GetMapping("/testSentiment")
    public String testSentimentGet() {
        RestTemplate restTemplate = new RestTemplate();

        ResponseEntity<String> result =
                restTemplate.getForEntity(logicApi + "/analyse?sentence=i+am+so+happy!", String.class);
        return result.getBody();
    }

}
