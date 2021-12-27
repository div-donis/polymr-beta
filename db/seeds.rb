require 'faker'

puts 'seeding...'

priority = ['moderate', 'intermediate', 'critical']
category = ['version-control', 'database', 'feature', 'compiler', 'development', 'reports', 'account', 'miscellaneous bug']

1.times do 
    Account.create(
        name: Faker::App.name,
        description: Faker::Lorem.sentence(word_count: 10),
        image: Faker::LoremFlickr.image
    )
end

10.times do 
    User.create(
        name: Faker::Name.name,
        email: Faker::Internet.unique.email,
        username: Faker::Internet.unique.username(specifier: 3..15),
        avi: Faker::Avatar.image,
        bio: Faker::Lorem.sentence(word_count: 15),
        company: Faker::Company.name,
        admin: Faker::Boolean.boolean(true_ratio: 0.1),
        account_id: 1,
    )
end

1.times do
    User.create(
        name: Faker::Name.name,
        email: 'polymr@test.me',
        username: Faker::Internet.unique.username(specifier: 3..15),
        avi: 'https://i.imgur.com/yAh3r57.jpg',
        bio: Faker::Lorem.sentence(word_count: 15),
        company: Faker::Company.name,
        admin: Faker::Boolean.boolean(true_ratio: 0.1),
        account_id: 1,
    )
end

20.times do 
    random_user = User.all.sample
    Task.create(
        subject: Faker::Hacker.noun,
        priority: priority.sample,
        status: 'new',
        created_by: random_user.username,
        closed_by: 'n/a',
        assigned_to: 'none',
        category: category.sample,
        description: Faker::Lorem.sentence(word_count: 40),
        user_id: random_user.id,
        account_id: 1
    )
end

20.times do 
    random_user = User.all.sample
    assigned_user = User.all.sample
    Task.create(
        subject: Faker::Hacker.noun,
        priority: priority.sample,
        status: 'claimed',
        created_by: random_user.username,
        closed_by: 'n/a',
        assigned_to: assigned_user.username,
        category: category.sample,
        description: Faker::Lorem.sentence(word_count: 40),
        user_id: assigned_user.id,
        account_id: 1
    )
end

20.times do 
    random_user = User.all.sample
    assigned_user = User.all.sample
    Task.create(
        subject: Faker::Hacker.noun,
        priority: priority.sample,
        status: 'closed',
        created_by: random_user.username,
        closed_by: assigned_user.username,
        assigned_to: assigned_user.username,
        category: category.sample,
        description: Faker::Lorem.sentence(word_count: 40),
        user_id: assigned_user.id,
        account_id: 1
    )
end

400.times do 
    Comment.create(
        task_id: Faker::Number.within(range: 1..60),
        user_id: Faker::Number.within(range: 1..11),
        content: Faker::Lorem.sentence(word_count: 12)
    )
end

puts 'done seeding!'

