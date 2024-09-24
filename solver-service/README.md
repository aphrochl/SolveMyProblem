change the table problems:

```sh
ALTER TABLE problems
ADD COLUMN "user" TEXT,
ADD COLUMN solved_at TIMESTAMP WITHOUT TIME ZONE,
ADD COLUMN input_data TEXT;
```
