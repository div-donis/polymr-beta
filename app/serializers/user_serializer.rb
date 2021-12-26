class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :avi, :bio, :company, :admin, :account_id

  belongs_to :account
end
