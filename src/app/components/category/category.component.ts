import { CategoryService } from './../../services/category.service';
import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  currentCategory : Category = {userId:0, title:''};

  constructor(private categoryService :CategoryService) { }

  ngOnInit(): void {
    this.getCategory()
  }

  getCategory() {
    this.categoryService.getCategories().subscribe((response) => {
      this.categories = response;
    })
  }

  setCurrentCategory(category: Category) {
    console.log(category);

    this.currentCategory = category;

  }

  getCurrentCategoryClass(category: Category) {


    if(category == this.currentCategory){
      return 'list-group-item active';
    }else {
      return "list-group-item"
    }
  }

  getAllCategoryClass(){

    if(!this.currentCategory.userId ){

      return "list-group-item active"
    }else {
      return 'list-group-item ';
    }
  }

}
