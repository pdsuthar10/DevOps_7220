package com.csye7220.assignment4javaserver.model;

public class Sentence {
    private String sentence;

    public Sentence(){
    }

    public String getSentence() {
        return sentence;
    }

    public void setSentence(String sentence) {
        this.sentence = sentence;
    }

    @Override
    public String toString() {
        return "Sentence{" +
                "sentence='" + sentence + '\'' +
                '}';
    }
}
