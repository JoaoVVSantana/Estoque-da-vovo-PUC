import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faCubesStacked, faHandHoldingDollar, faBusinessTime, faClipboardList, faAnglesLeft, faAnglesRight } from "@fortawesome/free-solid-svg-icons";

import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/logo_lar_vovo.png";

import './SideBar.css'

export default function SideBar({ expanded, toggleSidebar }) {
  const location = useLocation();

  return (
    <div className={`sidebar d-flex flex-column collapsed ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className='area-logo d-flex justify-content-between'>
        {expanded && <img src={logo}/>}
        <div className='ms-auto'>
          <Button variant="primary" onClick={toggleSidebar} className="rounded-circle ">
            {expanded ? <FontAwesomeIcon icon={faAnglesLeft} /> : <FontAwesomeIcon icon={faAnglesRight} />}
          </Button>
        </div>
      </div>
      <Nav className={`side-nav flex-column p-2 mt-4 collapsed ${expanded ? 'expanded' : 'collapsed'}`}>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to={'/'} className={location.pathname === '/' ? 'navbar-link active' : ''}>
            <FontAwesomeIcon icon={faChartLine} />
            {expanded && <span className="ms-3">Dashboard</span>}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to={'/estoque'} className={location.pathname.includes('/estoque') ? 'navbar-link active' : ''}>
            <FontAwesomeIcon icon={faCubesStacked} />
            {expanded && <span className="ms-3">Estoque</span>}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to={'/doadores'} className={location.pathname.includes('/doadores') ? 'navbar-link active' : ''}>
            <FontAwesomeIcon icon={faHandHoldingDollar} />
            {expanded && <span className="ms-3">Doações</span>}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to={'/relatorio'} className={location.pathname.includes('/relatorio') ? 'navbar-link active' : ''}>
            <FontAwesomeIcon icon={faClipboardList} />
            {expanded && <span className="ms-3">Relatórios</span>}
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="mb-3">
          <Nav.Link as={Link} to={'/historico'} className={location.pathname.includes('/historico') ? 'navbar-link active' : ''}>
            <FontAwesomeIcon icon={faBusinessTime} />
            {expanded && <span className="ms-3">Histórico</span>}
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}