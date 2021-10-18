FROM openjdk:15
# Environment Variable that defines the endpoint of sentiment-analysis python api:
ENV SA_LOGIC_API_URL http://python-logic-server:5002
ADD target/assignment4-java-webapp-0.0.1-SNAPSHOT.jar /
CMD ["java", "-jar", "assignment4-java-webapp-0.0.1-SNAPSHOT.jar", "--assignment4webapp.logic.api=${SA_LOGIC_API_URL}"]