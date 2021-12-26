class AccountSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :description, :tasks
end
