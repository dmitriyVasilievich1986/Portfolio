docker build -t portfolio -f Dockerfile .

heroku container:push web -a aaa-project-portfolio

heroku container:release web -a aaa-project-portfolio

heroku run python manage.py migrate -a aaa-project-portfolio
