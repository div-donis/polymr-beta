class User < ApplicationRecord
    has_many :tasks
    has_many :comments
    belongs_to :account
    has_secure_password
    validates :password, presence: {on: :create}, confirmation: {case_sensitive: true}, length: {minimum: 8}
    validates :password_confirmation, presence: true
    validates :email, presence: true, length: {maximum: 255}, uniqueness: true
    validates :username, presence: true, length: {minimum: 3}, uniqueness: true
end
