package com.url.shortner.security.jwt;


import lombok.Data;
import lombok.NoArgsConstructor;

//dto class
@Data
public class jwtAuthenticationResponse {
    private String token;

    public jwtAuthenticationResponse() {
    }

    @Override
    public String toString() {
        return "jwtAuthenticationResponse{" +
                "token='" + token + '\'' +
                '}';
    }

    public jwtAuthenticationResponse(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
