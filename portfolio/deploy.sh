docker build -t portfolio -f Dockerfile .

heroku container:push web -a portfolio-project-dmitriy

heroku container:release web -a portfolio-project-dmitriy

heroku run python manage.py migrate -a portfolio-project-dmitriy
