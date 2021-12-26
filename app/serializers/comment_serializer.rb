class CommentSerializer < ActiveModel::Serializer
  attributes :id, :task_id, :user_id, :content, :user

  belongs_to :user
end
