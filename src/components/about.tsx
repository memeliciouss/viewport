'use client';
import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState<'home' | 'profile' | 'contact'>('home');

  return (
    <div>
      {/* Tabs */}
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
            id="home-tab"
            role="tab"
            aria-controls="home"
            aria-selected={activeTab === 'home'}
            onClick={() => setActiveTab('home')}
          >
            Programs
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'profile' ? 'active' : ''}`}
            id="profile-tab"
            role="tab"
            aria-controls="profile"
            aria-selected={activeTab === 'profile'}
            onClick={() => setActiveTab('profile')}
          >
            Control Panel
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === 'contact' ? 'active' : ''}`}
            id="contact-tab"
            role="tab"
            aria-controls="contact"
            aria-selected={activeTab === 'contact'}
            onClick={() => setActiveTab('contact')}
          >
            Documents
          </button>
        </li>
      </ul>

      {/* Content */}
      <div className="tab-content" id="myTabContent">
        {activeTab === 'home' && (
          <div className="tab-pane show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatem
              nam ut temporibus corporis dolorem dolores accusamus deserunt veniam eius
              maiores suscipit veritatis necessitatibus voluptatum incidunt repellendus
              eligendi, consequatur rem?
            </p>
            <button className="btn btn-sm mr-2 btn-primary border-dark" type="button">
              <span className="btn-text">Show Other Options</span>
            </button>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="tab-pane show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur earum
              consequuntur accusamus reprehenderit quae sint, quia eligendi sed quidem
              neque omnis odit suscipit dolorum corrupti minima quas temporibus recusandae
              vel.
            </p>
            <button className="btn btn-sm mr-2 btn-secondary border-dark" type="button">
              <span className="btn-text">Show Other Options</span>
            </button>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="tab-pane show active" id="contact" role="tabpanel" aria-labelledby="contact-tab">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea ad tempora, quam
              quisquam, neque possimus ducimus eligendi cumque ipsum autem nam magnam
              atque, ipsam sint inventore repellat iste sunt harum!
            </p>
            <button className="btn btn-sm mr-2 btn-tertiary border-dark" type="button">
              <span className="btn-text">Show Other Options</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
