'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import DarkMode from './DarkMode'

const Nav = () => {

  const { data: session } = useSession()

  const [providers, setProviders] = useState(null)
  const [toggleDropdown, setToggleDropdown] = useState(false)

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders()

      setProviders(response)
    }

    setUpProviders()
  }, [])

  return (
    <nav className='flex-between w-full mb-16 p-3 border-b border-l border-r border-gray-500 backdrop-blur rounded-b-3xl'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image
          src='/assets/images/logo2.png'
          alt='Site Logo'
          width={45}
          height={45}
          className='object-contain'
        />
        <p className='logo_text'>Proompter</p>
      </Link>

      {/* Desktop Nav */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex gap-3 md:gap-5'>
            <DarkMode/>
            <Link href='/create-prompt' className='black_btn'>
              Create Post
            </Link>

            <button type='button' onClick={signOut} className='outline_btn'>
              Sign Out
            </button>

            <Link href='/profile'>
              <Image
                src={session?.user.image}
                width={37}
                height={37}
                className='rounded-full'
                alt='profile'
              />
            </Link>
          </div>
        ) : (
          <div className='flex gap-3 md:gap-5'>
            {/* Map over providers */}
            <DarkMode/>
            {providers && Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign In
              </button>
            ))}
          </div>
        )}
      </div>
      {/* End Desktop Nav */}

      {/* Mobile Nav */}
      <div className='sm:hidden flex relative gap-3'>
        <DarkMode/>
        {session?.user ? (
          <div className='flex'>
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className='rounded-full'
              alt='profile'
              onClick={() => setToggleDropdown((prev) => !prev)}
            />{/* indirectly change state using prev ver of same state */}

            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/profile'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  My Profile
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Create Prompt
                </Link>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false)
                    signOut()
                  }}
                  className='mt-5 w-full black_btn'
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {/* Map over providers */}
            {providers && Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='black_btn'
              >
                Sign In
              </button>
            ))}
          </>
        )}
      </div>
      {/* End Mobile Nav */}
    </nav>
  )
}

export default Nav