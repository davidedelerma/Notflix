in folder show_api_2 run bundle first and then:
rails generate migration drop_users
rails destroy model User
//all these stuffs above  are made to remove user table  of last day so we can start from scratch:
Modern web architecthure

 Server2(Rails) ->   Server -> React
 gem install rack-cors
 everytime we insert a gem we have to run bundle
to make react server talo to rail server modify the file: config.ru as shown in the file

to install devise:
 rails g devise:install
create USer:
rails g devise User
rake db:migrate

let's connect to another port: rails s -p 5000
