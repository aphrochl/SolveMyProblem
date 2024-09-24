Invoke-RestMethod -Uri http://localhost:3003/problems/delete-problem/15 -Method DELETE -Headers @{"Content-Type"="application/json"}


Invoke-RestMethod -Uri http://localhost:3003/problems/submit-problem -Method POST -H
eaders @{"Content-Type"="application/json"} -Body '{"description": "This is a sample problem description.", "title": "Sample Problem Title", "user": "john_doe", "input_data": "afro"}'
