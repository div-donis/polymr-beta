require 'faker'
require 'byebug'

puts 'seeding...'

priority = ['moderate', 'intermediate', 'critical']
status = ['new', 'claimed', 'closed']
category = ['version-control', 'database', 'feature', 'compiler', 'development', 'reports', 'account', 'miscellaneous bug']

100.times do 
    User.create(
        name: Faker::Name.name,
        email: Faker::Internet.unique.email,
        avi:  Faker::Avatar.image,
        bio: Faker::Lorem.sentence(word_count: 15),
        company: Faker::Company.name,
        admin: Faker::Boolean.boolean(true_ratio: 0.1),
    )
end


100.times do 
    Account.create(
        name: Faker::App.name,
        description: Faker::Lorem.sentence(word_count: 10)
    )
end

100.times do 
    random_user = User.all.sample.email
    Task.create(
        subject: Faker::Hacker.noun,
        priority: priority.sample,
        status: status.sample,
        created_by: random_user,
        closed_by: random_user,
        assigned_to: random_user,
        category: category.sample,
        description: Faker::Lorem.sentence(word_count: 40),
        user_id: Faker::Number.within(range: 1..100),
        account_id: Faker::Number.within(range: 1..100)
    )
end

800.times do 
    Comment.create(
        task_id: Faker::Number.within(range: 1..100),
        user_id: Faker::Number.within(range: 1..100),
        content: Faker::Lorem.sentence(word_count: 12)
    )
end

puts 'done seeding!'

