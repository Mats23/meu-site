import React from 'react';
import { ContentPage } from '../../components/content/style';
import Header from '../../components/header';
import TabNavigation from '../../components/navigation';
import { MainHTML } from '../style';
import { PostList } from './style';

export default function News() {

  return(
    <MainHTML>
      <Header/>
      <ContentPage>
        <PostList>
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div>
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div>
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div>
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div>
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div>
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div>
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div>
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div>
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div>  
          <div className="card post__item">
            <div className="card-header">
              <h4>O Blog</h4>
            </div>
            <div className="card-body">
              <p>Lorem ipsu</p>
            </div>
          </div> 
        </PostList>
        <TabNavigation/>
      </ContentPage>
    </MainHTML>
  )
}