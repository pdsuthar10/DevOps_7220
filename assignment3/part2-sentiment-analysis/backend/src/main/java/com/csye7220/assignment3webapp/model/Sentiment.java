package com.csye7220.assignment3webapp.model;

public class Sentiment {
    private String sentence;
    private float polarity;

    public Sentiment() {
    }

    public Sentiment(String sentence, float polarity) {
        this.sentence = sentence;
        this.polarity = polarity;
    }

    public String getSentence() {
        return sentence;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }

    public float getPolarity() {
        return polarity;
    }

    public void setPolarity(float polarity) {
        this.polarity = polarity;
    }

    @Override
    public String toString() {
        return "Sentiment{" +
                "sentence='" + sentence + '\'' +
                ", polarity=" + polarity +
                '}';
    }
}
