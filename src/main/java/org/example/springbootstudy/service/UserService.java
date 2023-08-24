package org.example.springbootstudy.service;

import lombok.RequiredArgsConstructor;
import org.example.springbootstudy.domain.User;
import org.example.springbootstudy.dto.AddUserRequest;
import org.example.springbootstudy.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class UserService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    public Long save(AddUserRequest dto) {
        return userRepository.save(User.builder()
                .email(dto.getEmail())
                .password(bCryptPasswordEncoder.encode(dto.getPassword())) // 암호화
                .build()).getId();
    }

}
