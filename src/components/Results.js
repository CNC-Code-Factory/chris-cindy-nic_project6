import React, { Component } from 'react';
import './../partials/_results.scss';
import { Route, Link } from 'react-router-dom';
import Recipe from './Recipe';

class Results extends Component {
  render(){
    return(
      <section className="results">
        <h2 className="h2">{this.props.recipe.name}</h2>

        <div className="results__item">
        { this.props.recipe ? <img src={this.props.recipe.images[0].imageUrlsBySize[360]} alt={`${this.props.recipe.name}`}/> : null }
        </div>

        <div className="results__description">
          <h3 className="h3">Featuring</h3>
          <p className="results__beverages">{`Moon Dollar Coffee & ${this.props.alcohol}`}</p>
        </div>
        
        <Link to="/form" >
          <button className="btn">Shake it up</button>
        </Link>

        <Link to="/results/recipe">
          <button className="btn">Serve it up</button>
        </Link>
        
        <Route path="/results/recipe" render={(props) => <Recipe {...props} alcohol={this.props.alcohol} recipe={this.props.recipe}/>} />
      </section>
    )
  }
}

export default Results;