class TaskSerializer < ActiveModel::Serializer
  attributes :id, :subject, :priority, :status, :created_by, :closed_by, :assigned_to, :category, :description, :user_id, :account_id, :created_at

end
