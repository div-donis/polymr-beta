class Task < ApplicationRecord
    has_many :comments
    belongs_to :user
    belongs_to :account
end
