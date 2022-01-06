class User < ApplicationRecord
    has_many :tasks
    has_many :comments
    belongs_to :account
    has_secure_password
    validates :password, presence: {on: :create}, confirmation: {case_sensitive: true}, length: {minimum: 8}
    validates :password_confirmation, presence: {on: :create}
    validates :email, presence: {on: :create}, length: {maximum: 255}, uniqueness: true
    validates :username, presence: {on: :create}, length: {minimum: 3}, uniqueness: true
end
