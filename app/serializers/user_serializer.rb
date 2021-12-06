class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :avi, :bio, :company, :admin
end
