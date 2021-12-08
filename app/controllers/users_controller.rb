class UsersController < ApplicationController
  
  # GET /users
  def index
    users = User.all

    render json: users
  end

  # GET /users/1
  def show
    user = User.find_by(id: session[:user_id])
    if user
      render json: user
    else
      render json: { error: "not authorized" }, status: :unauthorized
    end
  end

  # POST /users
  def create
    user = User.new(user_params)
    if user.save
      render json: user, status: :created, location: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if user.update(user_params)
      render json: user
    else
      render json: user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    user.destroy
  end

  private

    # Only allow a list of trusted parameters through.
    def user_params
      params.require(:user).permit(:name, :email, :avi, :bio, :company, :admin)
    end
end
