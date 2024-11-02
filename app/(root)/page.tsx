"use client"
import React from 'react'
import HeaderBox from '@/components/HeaderBox'
import TotalBalance from '@/components/TotalBalanceBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';

const Home = () => {
    const loggedIn ={firstName:'Vedant'};
    return (
        <section className="home">
            <div className="home-content">
                <header className="home-header">
                    <HeaderBox 
                        type="greeting"
                        title="Welcome"
                        user={loggedIn?.firstName || 'Guest'}
                        subtext="Access and manage your account and transactions efficiently."
                    />
                    <TotalBalanceBox
                        accounts={[]}
                        totalBanks={1}
                        totalCurrentBalance={1250.22}
                    />
                </header>

            </div>
        </section>
    )
}

export default Home
