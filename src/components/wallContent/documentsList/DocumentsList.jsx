import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocumentItem from './documentItem/DocumentItem.jsx'

class DocumentsList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    const docs = [
      {
        user: {
          name: 'Vlad Tamas',
          workplace: 'P3',
          image: 'https://avatar.skype.com/v1/avatars/vladtamas3/public?returnDefaultImage=false&cacheHeaders=true'
        },
        title: 'Why try Android development',
        likes: ['12', '25', '42','3'],
        image: 'http://lowendguru.com/wp-content/uploads/android-smartphone1.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa.' +
        ' Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc ' +
        'lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pelle' +
        'ntesque lobortis odio.'
      },
      {
        user: {
          name: 'Calin Ortan',
          workplace: 'Softvision',
          image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAsCAAAAJDBhMjM3YmIxLWY1ZmQtNDUyMS1iODVlLTIzZDgxZjBkYjRkMA.jpg'
        },
        title: 'Post about cats',
        likes: ['1', '5', '12'],
        image: 'http://www.cats.org.uk/uploads/images/featurebox_sidebar_kids/grief-and-loss.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mattis pretium massa.' +
        ' Aliquam erat volutpat. Nulla facilisi. Donec vulputate interdum sollicitudin. Nunc ' +
        'lacinia auctor quam sed pellentesque. Aliquam dui mauris, mattis quis lacus id, pelle' +
        'ntesque lobortis odio.'
      }
    ]
    return docs.map((doc, index) => {
      return <li className='DocumentsList-Item' key={index}>
        <DocumentItem document={doc} />
      </li>
    });
  }
  render() {
    return <ul className={'DocumentsList'}>
      {this.renderList()}
    </ul>
  }
}

DocumentsList.propTypes = {
  children: PropTypes.element
}
export default DocumentsList;