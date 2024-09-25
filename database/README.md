```sh
ALTER TABLE statistics
ADD COLUMN cpu_usage text,
ADD COLUMN memory_usage text;

ALTER TABLE statistics
ADD CONSTRAINT fk_problem
FOREIGN KEY (problem_id) REFERENCES problems(id);
```
