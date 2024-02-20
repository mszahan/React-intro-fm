import { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import AdoptedPetContext from './AdoptedPetContext';
import fetchPet from './fetchPet';
import Carousel from './Carousel';
import ErrorBoundary from './ErrorBoundary';
import Modal from './Modal';

// import { PetAPIResponse } from './APIResponsesTypes';

const Details = () => {
  const { id } = useParams();

  if (!id) {
    throw new Error('Id not found');
  }

  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAdoptedPet] = useContext(AdoptedPetContext);
  const results = useQuery(['details', id], fetchPet);

  if (results.isLoading) {
    return (
      <div className="loading-pane">
        <h2 className="loader">🐿️</h2>
      </div>
    );
  }

  const pet = results?.data?.pets[0];

  if (!pet) {
    throw new Error('No pet found');
  }

  return (
    <div className="details">
      <Carousel images={pet.images} />
      <h2> {pet.name} </h2>
      <h2>
        {pet.animal} — {pet.breed} — {pet.city}, {pet.state}
      </h2>
      <button onClick={() => setShowModal(true)}>Adopt {pet.name} </button>
      <p>{pet.description}</p>
      {showModal ? (
        <Modal>
          <div>
            <h1>Would you like to adopt {pet.name}?</h1>
            <div className="buttons">
              <button
                onClick={() => {
                  setAdoptedPet(pet);
                  navigate('/');
                }}
              >
                Yes
              </button>
              <button onClick={() => setShowModal(false)}>No</button>
            </div>
          </div>
        </Modal>
      ) : null}
    </div>
  );
};

function DetailsErrorBoundary() {
  return (
    <ErrorBoundary>
      <Details />
    </ErrorBoundary>
  );
}

export default DetailsErrorBoundary;
