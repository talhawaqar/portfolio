class ProjectsController < ApplicationController
  before_action :find_project, only: %i[show edit update destroy]
  before_action :authenticate_user!, only: %i[new edit destroy update create]

  def index
    @categories = Category.all
    @projects = Project.all.order("project_date desc")
  end

  def show
  end

  def new
    @project = Project.new
    @categories = Category.all
  end

  def create
    @project = Project.new(project_params)
    @project.category_id = params["category"]["category_id"]
    @project.images = params[:project_images]
    if @project.save
      redirect_to root_path
    else
      @categories = Category.all
      render 'new'
    end
  end

  def edit
  end

  def update
  end

  def destroy
    @project.destroy
    redirect_to root_path
  end

  private

  def find_project
    @project = Project.find(params[:id])
  end

  def project_params
    params.require(:project).permit(:title, :client, :project_date, :url, :description, :display_category)
  end
end
