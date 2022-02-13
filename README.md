# Setup

```shell
docker-compose up
```


# DBのみDocker利用

```shell
docker run -it -p 5432:5432 -e 'POSTGRES_PASSWORD=password' -e 'POSTGRES_USERNAME=postgres' -d postgres
```

```shell
bundle
rails db:create db:migrate
```

# Test

```shell
bundle exec rspec
```

