import { Inter } from 'next/font/google';
import Link from 'next/link';

import type { Metadata } from 'next';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <div className="ml-4 mt-4 flex gap-4">
                    <Link className="text-blue-600 hover:underline" href="/form-page-1">
                        FormPage1
                    </Link>
                    <Link className="text-blue-600 hover:underline" href="/form-page-2">
                        FormPage2
                    </Link>
                    <Link className="text-blue-600 hover:underline" href="/form-page-3">
                        FormPage3
                    </Link>
                </div>
                {children}
            </body>
        </html>
    );
}
