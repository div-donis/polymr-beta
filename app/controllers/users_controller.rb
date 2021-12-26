class UsersController < ApplicationController
  skip_before_action :authorize, only: :index
  # GET /users
  def index
    users = User.all

    render json: users
  end

  # GET /users/1
  def show
    render json: @current_user, status: :accepted
  end

  # POST /users
  def create
    user = User.create(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # PATCH/PUT /users/1
  def update
    user = User.find_by(id: params[:id])
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    user = User.find_by(id: params[:id])
    user.destroy
  end

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :avi, :bio, :company, :account_id)
    end
end
