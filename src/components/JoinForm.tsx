import { type CSSProperties, type ReactNode, useState } from 'react'

/* ------------------------------------------------------------- options */
const GENDER = ['Male', 'Female']
const AGE_GROUPS = ['10-20', '21-30', '31-40', '41-50', '51-60', '61-70', '71 and above']
const MARITAL = ['Single', 'Engaged', 'Married', 'Divorced', 'Widowed', 'Other']
const EDUCATION = ['High school', 'Diploma', 'Post Diploma', 'Bachelor’s degree', 'Master’s degree', 'Doctoral degree']
const YES_NO = ['Yes', 'No']

const QUALIFICATIONS = [
  'The candidate shall have been born again. (John 3:3-8)',
  'The candidate shall be living a life of holiness.',
  'The candidate shall have been baptized in water by immersion.',
  'The candidate shall regularly contribute their tithes and offerings to the East Assembly.',
  'The candidate shall be a regular attendant of the East Assembly services.',
]

/* --------------------------------------------------------------- state */
interface FormState {
  firstName: string
  middleName: string
  lastName: string
  phone: string
  email: string
  gender: string
  nationality: string
  postalAddress: string
  ageGroup: string
  maritalStatus: string
  explainMaritalStatus: string
  weddingAnniversary: string
  vocation: string
  education: string
  bornAgain: string
  baptizedMuchWater: string
  yearBaptized: string
  attendedEA: string
  attendedSince: string
  servedOtherChurch: string
  whichMinistry: string
  wantToServe: string
  waysToServe: string
  commitDoctrines: string
}

const initial: FormState = {
  firstName: '', middleName: '', lastName: '', phone: '', email: '', gender: '',
  nationality: '', postalAddress: '', ageGroup: '', maritalStatus: '', explainMaritalStatus: '',
  weddingAnniversary: '', vocation: '', education: '', bornAgain: '', baptizedMuchWater: '',
  yearBaptized: '', attendedEA: '', attendedSince: '', servedOtherChurch: '', whichMinistry: '',
  wantToServe: '', waysToServe: '', commitDoctrines: '',
}

/* -------------------------------------------------------------- styles */
const inputStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  padding: '13px 15px',
  borderRadius: '12px',
  border: '1px solid #dbe8f1',
  fontFamily: "'Mulish',sans-serif",
  fontSize: '15px',
  background: '#f7fbfe',
  color: '#1f2733',
}

/* ---------------------------------------------------------- helpers */
function Field({ label, required, help, children }: { label: string; required?: boolean; help?: string; children: ReactNode }) {
  return (
    <div style={{ marginBottom: '22px' }}>
      <label style={{ display: 'block', fontSize: '13.5px', fontWeight: 700, color: '#33434f', marginBottom: '10px' }}>
        {label}
        {required && <span style={{ color: '#ec1c24' }}> *</span>}
      </label>
      {children}
      {help && <div style={{ fontSize: '12.5px', color: '#8496a5', marginTop: '6px' }}>{help}</div>}
    </div>
  )
}

function Row({ children }: { children: ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: '0 20px' }}>
      {children}
    </div>
  )
}

function GroupTitle({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans'",
        fontWeight: 800,
        fontSize: '13px',
        letterSpacing: '.1em',
        color: '#ec1c24',
        textTransform: 'uppercase',
        margin: '34px 0 18px',
        paddingBottom: '8px',
        borderBottom: '1px solid #eef4f9',
      }}
    >
      {children}
    </div>
  )
}

function Radios({ name, options, value, onChange, required }: { name: string; options: string[]; value: string; onChange: (v: string) => void; required?: boolean }) {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
      {options.map((opt, i) => {
        const sel = value === opt
        return (
          <label key={opt} style={{ cursor: 'pointer' }}>
            <input
              type="radio"
              name={name}
              value={opt}
              checked={sel}
              onChange={() => onChange(opt)}
              required={required && i === 0}
              style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
            />
            <span
              style={{
                display: 'inline-block',
                border: `1.5px solid ${sel ? '#00adee' : '#dbe8f1'}`,
                background: sel ? '#e8f7fd' : '#fff',
                color: sel ? '#0e9fd6' : '#33434f',
                borderRadius: '100px',
                padding: '9px 18px',
                fontSize: '14px',
                fontWeight: 700,
                transition: 'all .15s',
              }}
            >
              {opt}
            </span>
          </label>
        )
      })}
    </div>
  )
}

/* ---------------------------------------------------------- component */
export default function JoinForm() {
  const [form, setForm] = useState<FormState>(initial)
  const [submitted, setSubmitted] = useState(false)
  const set = (k: keyof FormState, v: string) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: window.scrollY - 200, behavior: 'smooth' })
  }

  if (submitted) {
    return (
      <div
        style={{
          maxWidth: '720px',
          margin: '0 auto',
          background: '#fff',
          border: '1px solid #e7f0f6',
          borderRadius: '24px',
          padding: 'clamp(32px, 5vw, 56px)',
          textAlign: 'center',
          boxShadow: '0 16px 40px rgba(16,80,120,.08)',
        }}
      >
        <div
          style={{
            width: '68px',
            height: '68px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg,#00adee,#0b7bb0)',
            color: '#fff',
            fontSize: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 22px',
          }}
        >
          &#10003;
        </div>
        <h3 style={{ fontFamily: "'Plus Jakarta Sans'", fontWeight: 800, fontSize: '26px', color: '#12384c', margin: '0 0 12px' }}>
          Thank you, {form.firstName || 'friend'}!
        </h3>
        <p style={{ color: '#5a6772', fontSize: '16px', lineHeight: 1.65, margin: 0 }}>
          Your registration has been received. Our team will reach out to welcome you and help you take your
          next step at East Assembly. Karibu, we&rsquo;re so glad you&rsquo;re here.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: '860px',
        margin: '0 auto',
        background: '#fff',
        border: '1px solid #e7f0f6',
        borderRadius: '24px',
        padding: 'clamp(24px, 4vw, 44px)',
        boxShadow: '0 16px 40px rgba(16,80,120,.08)',
      }}
    >
      {/* Name */}
      <Field label="Name" required help="Middle name is optional.">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(150px,1fr))', gap: '12px' }}>
          {([
            ['First', 'firstName', true],
            ['Middle', 'middleName', false],
            ['Last', 'lastName', true],
          ] as [string, keyof FormState, boolean][]).map(([ph, key, req]) => (
            <div key={key}>
              <input
                style={inputStyle}
                placeholder={ph}
                value={form[key]}
                required={req}
                onChange={(e) => set(key, e.target.value)}
              />
              <div style={{ fontSize: '12px', color: '#8496a5', marginTop: '5px' }}>{ph}</div>
            </div>
          ))}
        </div>
      </Field>

      <GroupTitle>Contact details</GroupTitle>
      <Row>
        <Field label="Phone" required>
          <input type="tel" style={inputStyle} placeholder="Phone number" value={form.phone} required onChange={(e) => set('phone', e.target.value)} />
        </Field>
        <Field label="Email" required>
          <input type="email" style={inputStyle} placeholder="Email address" value={form.email} required onChange={(e) => set('email', e.target.value)} />
        </Field>
      </Row>

      <Field label="Gender" required>
        <Radios name="gender" options={GENDER} value={form.gender} onChange={(v) => set('gender', v)} required />
      </Field>

      <GroupTitle>Nationality &amp; address</GroupTitle>
      <Row>
        <Field label="Nationality">
          <input style={inputStyle} placeholder="Nationality" value={form.nationality} onChange={(e) => set('nationality', e.target.value)} />
        </Field>
        <Field label="Postal address">
          <input style={inputStyle} placeholder="Postal address" value={form.postalAddress} onChange={(e) => set('postalAddress', e.target.value)} />
        </Field>
      </Row>

      <GroupTitle>About you</GroupTitle>
      <Field label="Age group" required>
        <Radios name="ageGroup" options={AGE_GROUPS} value={form.ageGroup} onChange={(v) => set('ageGroup', v)} required />
      </Field>

      <Field label="Marital status" required>
        <Radios name="maritalStatus" options={MARITAL} value={form.maritalStatus} onChange={(v) => set('maritalStatus', v)} required />
      </Field>
      {form.maritalStatus === 'Other' && (
        <Field label="Explain marital status" required>
          <input style={inputStyle} placeholder="Please explain" value={form.explainMaritalStatus} required onChange={(e) => set('explainMaritalStatus', e.target.value)} />
        </Field>
      )}
      {form.maritalStatus === 'Married' && (
        <Field label="Date of wedding anniversary">
          <input type="date" style={inputStyle} value={form.weddingAnniversary} onChange={(e) => set('weddingAnniversary', e.target.value)} />
        </Field>
      )}

      <GroupTitle>Vocation &amp; training</GroupTitle>
      <Row>
        <Field label="Vocation / training">
          <input style={inputStyle} placeholder="Your vocation or training" value={form.vocation} onChange={(e) => set('vocation', e.target.value)} />
        </Field>
        <Field label="Highest level of education">
          <select style={inputStyle} value={form.education} onChange={(e) => set('education', e.target.value)}>
            <option value="">Select&hellip;</option>
            {EDUCATION.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </Field>
      </Row>

      <GroupTitle>Faith journey</GroupTitle>
      <Field label="Born again?">
        <Radios name="bornAgain" options={YES_NO} value={form.bornAgain} onChange={(v) => set('bornAgain', v)} />
      </Field>
      <Field label="Baptized in much water?">
        <Radios name="baptizedMuchWater" options={YES_NO} value={form.baptizedMuchWater} onChange={(v) => set('baptizedMuchWater', v)} />
      </Field>
      {form.baptizedMuchWater === 'Yes' && (
        <Field label="Year baptized">
          <input style={inputStyle} placeholder="e.g. 2015" value={form.yearBaptized} onChange={(e) => set('yearBaptized', e.target.value)} />
        </Field>
      )}

      <GroupTitle>Church &amp; service</GroupTitle>
      <Field label="Attended East Assembly?">
        <Radios name="attendedEA" options={YES_NO} value={form.attendedEA} onChange={(v) => set('attendedEA', v)} />
      </Field>
      {form.attendedEA === 'Yes' && (
        <Field label="Attended East Assembly since?">
          <input style={inputStyle} placeholder="e.g. 2019" value={form.attendedSince} onChange={(e) => set('attendedSince', e.target.value)} />
        </Field>
      )}
      <Field label="Have you served in any capacity in another church?">
        <Radios name="servedOtherChurch" options={YES_NO} value={form.servedOtherChurch} onChange={(v) => set('servedOtherChurch', v)} />
      </Field>
      {form.servedOtherChurch === 'Yes' && (
        <Field label="Which area of ministry?" required>
          <input style={inputStyle} placeholder="Area of ministry" value={form.whichMinistry} required onChange={(e) => set('whichMinistry', e.target.value)} />
        </Field>
      )}
      <Field label="Do you want to serve at East Assembly?">
        <Radios name="wantToServe" options={YES_NO} value={form.wantToServe} onChange={(v) => set('wantToServe', v)} />
      </Field>
      {form.wantToServe === 'Yes' && (
        <Field label="In what ways do you want to serve in East Assembly, based on your interests, abilities, gifts and time?">
          <textarea
            rows={4}
            style={{ ...inputStyle, resize: 'vertical' }}
            placeholder="Tell us how you'd love to serve"
            value={form.waysToServe}
            onChange={(e) => set('waysToServe', e.target.value)}
          />
        </Field>
      )}

      {/* Qualifications for membership */}
      <GroupTitle>Qualifications for membership</GroupTitle>
      <div
        style={{
          background: '#f2f9fd',
          border: '1px solid #dbeaf4',
          borderRadius: '16px',
          padding: '22px 24px',
          marginBottom: '22px',
        }}
      >
        <ul style={{ margin: 0, padding: 0 }}>
          {QUALIFICATIONS.map((q) => (
            <li key={q} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', listStyle: 'none', marginBottom: '10px' }}>
              <span style={{ color: '#00adee', fontWeight: 800, flex: 'none', marginTop: '1px' }}>&#10003;</span>
              <span style={{ color: '#5a6772', fontSize: '14.5px', lineHeight: 1.55 }}>{q}</span>
            </li>
          ))}
        </ul>
      </div>
      <Field label="Do you commit to abide by the doctrines and policies of the Assemblies of God?">
        <Radios name="commitDoctrines" options={YES_NO} value={form.commitDoctrines} onChange={(v) => set('commitDoctrines', v)} />
      </Field>

      <button
        type="submit"
        style={{
          width: '100%',
          padding: '16px',
          borderRadius: '100px',
          border: 'none',
          background: 'linear-gradient(135deg,#ec1c24,#ff5058)',
          color: '#fff',
          fontWeight: 800,
          fontFamily: "'Mulish',sans-serif",
          fontSize: '16px',
          cursor: 'pointer',
          marginTop: '12px',
          boxShadow: '0 12px 28px rgba(236,28,36,.25)',
        }}
      >
        Submit Registration
      </button>
    </form>
  )
}
