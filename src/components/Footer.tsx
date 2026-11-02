import { type CSSProperties } from 'react'
import { Link } from 'react-router-dom'
import { Hover } from './Hover'
import { Icon } from './Icon'
import logo from '../assets/logo.png'

const quickLink: CSSProperties = { color: '#647585', textDecoration: 'none', fontSize: '14px' }
const heading: CSSProperties = {
  fontFamily: "'Plus Jakarta Sans'",
  color: '#12384c',
  fontSize: '15px',
  fontWeight: 800,
  margin: '0 0 18px',
  letterSpacing: '.01em',
}

export default function Footer() {
  return (
    <footer
      style={{
        fontFamily: "'Mulish',sans-serif",
        background: '#f2f8fc',
        color: '#566472',
        borderTop: '1px solid #e2edf5',
      }}
    >
      <div
        style={{
          height: '4px',
          background: 'linear-gradient(90deg,#ec1c24 50%,#00adee 50%)',
        }}
      />
      <div style={{ maxWidth: '1260px', margin: '0 auto', padding: '60px 26px 0' }}>
        <div
          className="ea-fgrid"
          style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1.1fr', gap: '44px' }}
        >
          {/* Brand */}
          <div>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                textDecoration: 'none',
                marginBottom: '18px',
              }}
            >
              <img
                src={logo}
                alt="East Assembly KAG Buru Buru Church"
                style={{ height: '60px', width: 'auto', display: 'block' }}
              />
            </Link>
            <p style={{ lineHeight: 1.7, fontSize: '14.5px', color: '#647585', maxWidth: '320px', margin: 0 }}>
              A family of believers dedicated to impacting the world with the Gospel of Jesus Christ
              through love and discipleship.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {[
                { name: 'facebook' as const, href: 'https://www.facebook.com/EastAssemblyChurch', color: '#0e9fd6', hover: '#00adee', label: 'Facebook' },
                { name: 'youtube' as const, href: 'https://www.youtube.com/@eastassemblychurch4046', color: '#ec1c24', hover: '#ec1c24', label: 'YouTube' },
                { name: 'instagram' as const, href: 'https://www.instagram.com/east.assembly_church/', color: '#0e9fd6', hover: '#00adee', label: 'Instagram' },
              ].map((s) => (
                <Hover
                  key={s.name}
                  as="a"
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '11px',
                    background: '#fff',
                    border: '1px solid #e2edf5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: s.color,
                    textDecoration: 'none',
                    transition: 'all .2s',
                  }}
                  hoverStyle={{ background: s.hover, color: '#fff', borderColor: s.hover }}
                >
                  <Icon name={s.name} size={18} />
                </Hover>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={heading}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Hover as={Link} to="/" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Home</Hover>
              <Hover as={Link} to="/about" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>About Us</Hover>
              <Hover as={Link} to="/im-new" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>I&rsquo;m New</Hover>
              <Hover as={Link} to="/ministries" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Ministries</Hover>
              <Hover as={Link} to="/events" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Events</Hover>
              <Hover as={Link} to="/live" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Live Stream</Hover>
              <Hover as={Link} to="/give" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Give</Hover>
            </div>
          </div>

          {/* Ministries */}
          <div>
            <h4 style={heading}>Ministries</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <Hover as={Link} to="/ministries" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Youth Ministry</Hover>
              <Hover as={Link} to="/ministries" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Music Ministry</Hover>
              <Hover as={Link} to="/ministries" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Discipleship</Hover>
              <Hover as={Link} to="/ministries" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Children&rsquo;s Ministry</Hover>
              <Hover as={Link} to="/ministries" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>Women&rsquo;s Ministry</Hover>
              <Hover as={Link} to="/ministries" style={quickLink} hoverStyle={{ color: '#ec1c24' }}>View all &rarr;</Hover>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 style={heading}>Get In Touch</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
              <span style={{ display: 'flex', gap: '10px', color: '#647585' }}>
                <span style={{ color: '#ec1c24' }}><Icon name="map-pin" size={16} /></span>Mesora Round-About, Buruburu, Nairobi, Kenya.
              </span>
              <Hover
                as="a"
                href="mailto:info@eastassembly.org"
                style={{ display: 'flex', gap: '10px', color: '#647585', textDecoration: 'none' }}
                hoverStyle={{ color: '#ec1c24' }}
              >
                <span style={{ color: '#ec1c24' }}><Icon name="mail" size={16} /></span>info@eastassembly.org
              </Hover>
              <Hover
                as="a"
                href="tel:+254721467846"
                style={{ display: 'flex', gap: '10px', color: '#647585', textDecoration: 'none' }}
                hoverStyle={{ color: '#ec1c24' }}
              >
                <span style={{ color: '#ec1c24' }}><Icon name="phone" size={16} /></span>+254 721 467 846
              </Hover>
            </div>
            <div style={{ marginTop: '20px' }}>
              <p style={{ fontSize: '13px', color: '#647585', margin: '0 0 10px' }}>
                Subscribe to our newsletter
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  placeholder="Your email"
                  style={{
                    flex: 1,
                    minWidth: 0,
                    padding: '11px 13px',
                    borderRadius: '6px',
                    border: '1px solid #d3e2ee',
                    background: '#fff',
                    color: '#1f2a33',
                    fontFamily: 'Mulish',
                    fontSize: '13px',
                  }}
                />
                <Hover
                  as="button"
                  style={{
                    padding: '11px 20px',
                    borderRadius: '6px',
                    border: 'none',
                    background: '#00adee',
                    color: '#fff',
                    fontWeight: 800,
                    fontFamily: 'Mulish',
                    cursor: 'pointer',
                    fontSize: '13px',
                    transition: 'background .2s',
                  }}
                  hoverStyle={{ background: '#0b7bb0' }}
                >
                  Go
                </Hover>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid #e2edf5',
            marginTop: '48px',
            padding: '24px 0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            flexWrap: 'wrap',
          }}
        >
          <span style={{ fontSize: '13px', color: '#8496a5' }}>
            &copy; 2026 East Assembly - KAG Buru Buru Church. All rights reserved.
          </span>
          <span style={{ fontSize: '13px', color: '#8496a5', fontStyle: 'italic' }}>
            I care&hellip; We care. &middot; Nairobi, Kenya.
          </span>
        </div>
      </div>
    </footer>
  )
}
