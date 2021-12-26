class User < ApplicationRecord
    has_many :tasks
    has_many :comments
    belongs_to :account
end
