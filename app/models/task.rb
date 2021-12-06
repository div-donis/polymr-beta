class Task < ApplicationRecord
    has_many :comments
    belongs_to :user
    belongs_to :account

    def created_at
       attributes['created_at'].strftime("%m/%d/%Y")
    end
end
