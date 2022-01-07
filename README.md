# React / Rails Project

# polymr collaboration center & task/bug tracker

To launch this project in localhost, for this repository then  run:

bundle install

npm install --prefix client

You can use the following commands to run the application:

- `rails s`: run the backend on [http://localhost:3000](http://localhost:3000)

- `npm start --prefix client`: run the frontend on
  [http://localhost:4000](http://localhost:4000)

To seed the database run:

rails db:migrate

rails db:seed

in the db directory, seeds.rb holds test user. You can use this information to log in: 

email: 'polymr@test.me'
password: 'polymrtest1'

This build is still in development. Feel free to contact me or make pull requests.