class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :username, :avi, :bio, :company, :admin, :account_id

  belongs_to :account
end
