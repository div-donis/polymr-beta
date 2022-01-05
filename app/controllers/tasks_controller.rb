class TasksController < ApplicationController

  # GET /tasks
  def index
    tasks = Task.all.sort_by { |t| t.priority}
    render json: tasks
  end

  # GET /accounts/:account_id/tasks
  def tasks_by_account
    tasks = Task.all.filter { |t| t.status != 'closed' && t.account_id.to_s === params[:account_id]}
    render json: tasks
  end

  def closed_tasks_by_account
    tasks = Task.all.filter { |t| t.status == 'closed'}
    render json: tasks
  end

  # GET /tasks/1
  def show
    task = Task.find_by(id: params[:id])
    if task
      render json: task, include: :comments
    else
      render json: { error: "task not found" }, status: :not_found
    end
  end

  # POST /tasks
  def create
    task = Task.new(task_params)

    if task.save
      render json: task, status: :created, location: task
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /tasks/1
  def update
    task = Task.find_by(id: params[:id])
    if task.update(task_params)
      render json: task
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

  # DELETE /tasks/1
  def destroy
    task.destroy
  end

  def show_comments
    task = Task.find(params[:task_id])
    comments = task.comments
    render json: comments, include: :task
  end

  private

    # Only allow a list of trusted parameters through.
    def task_params
      params.require(:task).permit(:subject, :priority, :status, :created_by, :closed_by, :assigned_to, :category, :description, :user_id, :account_id)
    end
end
