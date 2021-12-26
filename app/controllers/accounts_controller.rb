class AccountsController < ApplicationController

  # GET /accounts
  def index
    accounts = Account.all

    render json: accounts
  end

  # GET /accounts/1
  def show
    account = Account.find_by(id: params[:id])
    if account
      render json: account
    else
      render json: { error: "account not found" }, status: :not_found
    end
  end

  # POST /accounts
  def create
    account = Account.new(account_params)

    if account.save
      render json: account, status: :created, location: account
    else
      render json: account.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /accounts/1
  def update
    if account.update(account_params)
      render json: account
    else
      render json: account.errors, status: :unprocessable_entity
    end
  end

  # DELETE /accounts/1
  def destroy
    account.destroy
  end

  private

    # Only allow a list of trusted parameters through.
    def account_params
      params.require(:account).permit(:name, :description, :image)
    end
end
