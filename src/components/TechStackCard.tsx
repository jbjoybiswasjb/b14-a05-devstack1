import React, { useState } from 'react';

interface TechItem {
    id: string;
    name: string;
    category: string;
    logoUrl: string;
}

export default function TechStackCard() {
    // Local state initialized with the Svelte and Redis items shown in the image
    const [stack, setStack] = useState<TechItem[]>([
        {
            id: 'svelte',
            name: 'Svelte',
            category: 'Frontend',
            logoUrl: 'https://wikimedia.org',
        },
        {
            id: 'redis',
            name: 'Redis',
            category: 'Database',
            logoUrl: 'https://wikimedia.org',
        },
    ]);

    const handleRemoveItem = (id: string) => {
        setStack((prevStack) => prevStack.filter((item) => item.id !== id));
    };

    const handleClearAll = () => {
        setStack([]);
    };

    return (
        <div className="card bg-base-100 border border-base-200 shadow-sm p-6 font-sans">
            {/* Header */}
            <div className="mb-5">
                <h2 className="text-xl font-bold text-base-content tracking-tight">Your Stack</h2>
                <p className="text-sm text-neutral-400 mt-1">
                    {stack.length} {stack.length === 1 ? 'Technology Selected' : 'Technology Selected'}
                </p>
            </div>

            {/* Selected Items List */}
            <div className="flex flex-col gap-3 mb-6">
                {stack.length > 0 ? (
                    stack.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between p-3 bg-base-100 rounded-xl border border-base-300 transition-colors"
                        >
                            <div className="flex items-center gap-3">
                                <img
                                    src={item.logoUrl}
                                    alt={`${item.name} logo`}
                                    className="w-10 h-10 object-contain p-1"
                                />
                                <div>
                                    <h3 className="text-sm font-bold text-base-content">{item.name}</h3>
                                    <p className="text-xs text-neutral-400 mt-0.5">{item.category}</p>
                                </div>
                            </div>

                            {/* Inline SVG for Close icon (No dependencies) */}
                            <button
                                onClick={() => handleRemoveItem(item.id)}
                                className="btn btn-ghost btn-sm btn-circle text-neutral-400 hover:text-base-content"
                                aria-label={`Remove ${item.name}`}
                            >
                                <svg
                                    xmlns="http://w3.org"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-6 text-sm text-neutral-400 border border-dashed border-base-300 rounded-xl">
                        No items selected.
                    </div>
                )}
            </div>

            {/* DaisyUI Button with custom text alignment match */}
            {stack.length > 0 && (
                <button
                    onClick={handleClearAll}
                    className="btn btn-outline border-base-300 hover:border-error text-error hover:bg-error/10 bg-transparent rounded-xl normal-case font-semibold text-sm w-full"
                >
                    Remove All
                </button>
            )}
        </div>
    );
}