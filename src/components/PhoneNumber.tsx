"use client";

import { getCountries, getCountryCallingCode } from "libphonenumber-js";
import { defaultLanguage } from "@/utils";
import { useMemo, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface PhoneNumberProps {
    readonly language?: string;
    readonly value?: string;
    readonly onChange?: (value: string) => void;
    readonly placeholder?: string;
}

export default function PhoneNumber({ language, value = "", onChange, placeholder }: PhoneNumberProps) {
    const [isCountryOpen, setIsCountryOpen] = useState(false);
    const [country, setCountry] = useState("US");

    const countryCodeToFlag = (code: string) =>
        code.replace(/./g, c => String.fromCodePoint(127397 + c.charCodeAt(0)));

    const displayNames = useMemo(() => new Intl.DisplayNames([language ?? defaultLanguage], { type: "region" }), [language]);

    const countries = useMemo(
        () =>
            getCountries().map(code => ({
                code,
                name: displayNames.of(code) || code,
                callingCode: "+" + getCountryCallingCode(code),
                flag: countryCodeToFlag(code)
            })),
        [displayNames]
    );

    const selected = countries.find(c => c.code === country)!;

    const handleCountrySelect = (code: string) => {
        const newCountry = countries.find(c => c.code === code)!;
        setCountry(code);
        const number = value.replace(/^\+\d+\s*/, "");
        onChange?.(`${newCountry.callingCode} ${number}`);
        setIsCountryOpen(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const raw = e.target.value.replace(selected.callingCode, "").trimStart();
        onChange?.(`${selected.callingCode} ${raw}`);
    };

    return (
        <div className="relative w-full flex gap-4">
            <div className="flex-1 relative">
                <button
                    type="button"
                    onClick={() => setIsCountryOpen(v => !v)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg flex items-center justify-between bg-white hover:border-gray-400 transition-colors"
                >
                    <span>{selected.flag} {selected.name}</span>
                    <FaChevronDown className={`w-4 h-4 transition-transform ${isCountryOpen ? "rotate-180" : ""}`} />
                </button>

                {/* Dropdown - posicionado absolutamente respecto al botón */}
                {isCountryOpen && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                        {countries.map(c => (
                            <button
                                key={c.code}
                                type="button"
                                onClick={() => handleCountrySelect(c.code)}
                                className={`w-full px-4 py-2 text-left hover:bg-gray-50 transition-colors ${country === c.code ? 'bg-purple-50 text-purple-700' : ''}`}
                            >
                                {c.flag} {c.name}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex-1">
                <input
                    type="tel"
                    value={value.startsWith(selected.callingCode) ? value : `${selected.callingCode} `}
                    onChange={handleInputChange}
                    placeholder={placeholder}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
                />
            </div>
        </div>
    );
}