package org.example.springbootstudy.repository;

import org.example.springbootstudy.domain.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BlogRepository extends JpaRepository<Article, Long> {
}
