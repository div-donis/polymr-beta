class CommentsController < ApplicationController

  # GET /comments
  def index
    comments = Comment.all

    render json: comments
  end

  # GET /comments/1
  def show
    comment = Comment.find_by(id: params[:id])
    if comment
      render json: comment
    else
      render json: { error: "comment not found" }, status: :not_found
    end
  end

  # POST /comments
  def create
    comment = Comment.new(comment_params)

    if comment.save
      render json: comment, status: :created, location: comment
    else
      render json: comment.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /comments/1
  def update
    comment = Comment.find_by(id: params[:id])
    if comment.update(comment_params)
      render json: comment
    else
      render json: comment.errors, status: :unprocessable_entity
    end
  end

  # DELETE /comments/1
  def destroy
    comment = Comment.find_by(id: params[:id])
    if comment 
      comment.destroy
    else
      render json: { error: "comment not found" }, status: :not_found
    end
  end

  private

    # Only allow a list of trusted parameters through.
    def comment_params
      params.require(:comment).permit(:task_id, :user_id, :content)
    end
end
