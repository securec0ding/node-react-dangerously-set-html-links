curl -L -H 'Origin: https://securitylabs.veracode.com' -d '{ "post": {"postTitle":"McGonagall and Javascript", "link":"https://hunter2labs.s3.amazonaws.com/meme3.png", "review": "Classic meme template but overall not that funny\n\n\n7/10"} }' -H "Content-Type: application/json" -X POST http://$VIRTUAL_HOST/api/posts

curl -L -H 'Origin: https://securitylabs.veracode.com' -d '{ "post": {"postTitle":"Neo Learns React", "link":"https://hunter2labs.s3.amazonaws.com/meme2.jpeg", "review": "# A Meme with a lot of potential but falls short of the punchline\n\n\n## Format 10/10\n\n\nThe format is a rare one: the scene in the matrix where Neo learns Kung Fu. Instead of Kung Fu though we see that Neo has learned how to use create-react-app\n\n\n### Punchline 4/10\n\nOverall this meme just isnt that funny. It gets most of its kick from the template."} }' -H "Content-Type: application/json" -X POST http://$VIRTUAL_HOST/api/posts

curl -L -H 'Origin: https://securitylabs.veracode.com' -d '{ "post": {"postTitle":"Spongebob Case", "link":"https://hunter2labs.s3.amazonaws.com/meme1.png", "review": "I dont get it?? 0/10"} }' -H "Content-Type: application/json" -X POST http://$VIRTUAL_HOST/api/posts