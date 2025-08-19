'use client';

import { useRef, useState } from "react";
import { IoIosSend, IoIosAttach } from "react-icons/io";
import { FaCaretDown } from "react-icons/fa";
import { ConfettiButton } from "../button/confetti";
import confetti from 'canvas-confetti';

type Props = {
    isRightMode: boolean;
};

export const ContactForm = ({ isRightMode }: Props) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) return; // ถ้า null ให้ return
        setAttachedFiles(prev => [...prev, ...Array.from(files)]);
    };


    const removeFile = (index: number) => {
        setAttachedFiles(prev => prev.filter((_, i) => i !== index));
    };

    const [showFiles, setShowFiles] = useState(false);

    return (
        <div className="w-full z-10">
            <form
                className={`w-auto max-w-base lg:max-w-lg xl:max-w-xl ml-10 mr-4 rounded-lg border ${isRightMode ? "border-white" : "border-black"}`}
                onSubmit={(e) => e.preventDefault()}
            >
                <div className="p-6 md:p-8 space-y-5">
                    <p className={`text-base lg:text-lg xl:text-xl font-bold ${isRightMode ? 'text-white' : 'text-black'}`}>
                        Let’s create something great together — reach out here.
                    </p>

                    {/* Inputs */}
                    <input id="name" name="name" type="text" placeholder="Name" autoComplete="name" required
                        className={`w-full rounded-lg px-3 py-2 text-sm outline-none bg-transparent ${isRightMode ? "border border-white text-white placeholder-white" : "border border-black text-black placeholder-black"}`} />
                    <input id="email" name="email" type="email" placeholder="Email" autoComplete="email" required
                        className={`w-full rounded-lg px-3 py-2 text-sm outline-none bg-transparent ${isRightMode ? "border border-white text-white placeholder-white focus:ring-white" : "border border-black text-black placeholder-black focus:ring-black"}`} />
                    <input id="phone" name="phone" type="tel" placeholder="Phone Number" autoComplete="tel"
                        className={`w-full rounded-lg px-3 py-2 text-sm outline-none bg-transparent ${isRightMode ? "border border-white text-white placeholder-white focus:ring-white" : "border border-black text-black placeholder-black focus:ring-black"}`} />
                    <input id="subject" name="subject" type="text" placeholder="Subject" required
                        className={`w-full rounded-lg px-3 py-2 text-sm outline-none bg-transparent ${isRightMode ? "border border-white text-white placeholder-white focus:ring-white" : "border border-black text-black placeholder-black focus:ring-black"}`} />

                    {/* Message + Upload */}
                    <div className="relative w-full">
                        {/* Textarea */}
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows={5}
                            required
                            className={`w-full rounded-lg px-3 py-2 pb-16 text-sm outline-none bg-transparent resize-none ${isRightMode ? "border border-white text-white placeholder-white focus:ring-white" : "border border-black text-black placeholder-black focus:ring-black"}`}
                        />

                        <div className="absolute left-12 bottom-4 flex flex-col z-10">
                            {attachedFiles.length >= 2 ? (
                                <>
                                    {/* ปุ่ม toggle */}
                                    <button
                                        type="button"
                                        onClick={() => setShowFiles(prev => !prev)}
                                        className={`flex items-center w-auto h-8 px-2 border rounded-md text-sm ${isRightMode ? "border border-white bg-white text-black hover:bg-black hover:text-white hover:border-white" : "border border-black bg-black text-white hover:bg-white hover:text-black hover:border-black"}`}
                                    >
                                        {attachedFiles.length} files <FaCaretDown className={`ml-1 font-bold text-base transition-transform ${showFiles ? 'rotate-180' : ''}`} />
                                    </button>

                                    {/* กรอบไฟล์เมื่อกดขยาย */}
                                    {showFiles && (
                                        <div
                                            className={`mt-1 flex flex-col w-auto h-auto py-1 px-2 border rounded-md text-sm max-h-32 overflow-y-auto ${isRightMode ? "border border-white bg-white text-black hover:bg-black hover:text-white hover:border-white" : "border border-black bg-black text-white hover:bg-white hover:text-black hover:border-black"}`}
                                        >
                                            {attachedFiles.map((file, idx) => (
                                                <div key={idx} className="flex items-center justify-between">
                                                    <span>{file.name}</span>
                                                    <button type="button" onClick={() => removeFile(idx)} className="font-bold ml-1 text-base px-1">
                                                        &times;
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </>
                            ) : attachedFiles.length === 1 ? (
                                // กรณีไฟล์ 1 ไฟล์ แสดงปกติ
                                <div
                                    className={`flex items-center w-auto h-8 px-2 border rounded-md text-sm ${isRightMode ? "border border-white bg-white text-black hover:bg-black hover:text-white hover:border-white" : "border border-black bg-black text-white hover:bg-white hover:text-black hover:border-black"}`}
                                >
                                    {attachedFiles[0].name}
                                    <button type="button" onClick={() => removeFile(0)} className="font-bold ml-1 text-base px-1">
                                        &times;
                                    </button>
                                </div>
                            ) : null}
                        </div>


                        {/* File upload button (ขวาล่าง) */}
                        <div className="absolute left-3 bottom-4">
                            <input
                                type="file"
                                id="file-upload"
                                className="hidden"
                                multiple
                                onChange={handleFileChange}
                            />
                            <label
                                htmlFor="file-upload"
                                className={`flex items-center justify-center w-8 h-8 rounded-lg cursor-pointer transition-colors ${isRightMode ? "border border-white bg-white text-black hover:bg-black hover:text-white hover:border-white" : "border border-black bg-black text-white hover:bg-white hover:text-black hover:border-black"}`}
                            >
                                <IoIosAttach className="w-5 h-5" />
                            </label>
                        </div>
                    </div>

                    {/* ConfettiButton */}
                    <ConfettiButton
                        ref={buttonRef}
                        type="button"
                        variant="custom"
                        options={{ particleCount: 80, spread: 70 }}
                        className={`w-full rounded-xl px-3 py-2 text-sm outline-none transition-colors duration-300 flex items-center justify-center ${isRightMode ? "bg-white border border-white text-black hover:bg-black hover:border-white hover:text-white" : "bg-black border border-black text-white hover:bg-white hover:border-black hover:text-black"}`}
                        onClick={async () => {
                            const form = buttonRef.current?.closest("form") as HTMLFormElement | null;
                            if (!form) return;
                            if (!form.reportValidity()) return;

                            const formData = new FormData(form);

                            const files: { name: string; contentBase64: string; type: string }[] = [];
                            for (const file of attachedFiles) {
                                const base64 = await new Promise<string>((resolve, reject) => {
                                    const reader = new FileReader();
                                    reader.onload = () => resolve((reader.result as string).split(",")[1]);
                                    reader.onerror = reject;
                                    reader.readAsDataURL(file);
                                });
                                files.push({ name: file.name, contentBase64: base64, type: file.type });
                            }

                            const data = {
                                name: formData.get("name"),
                                email: formData.get("email"),
                                phone: formData.get("phone"),
                                subject: formData.get("subject"),
                                message: formData.get("message"),
                                files,
                            };

                            try {
                                const res = await fetch("/api/send-email", {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(data),
                                });

                                if (res.ok && buttonRef.current) {
                                    const rect = buttonRef.current.getBoundingClientRect();
                                    const x = rect.left + rect.width / 2;
                                    const y = rect.top + rect.height / 2;
                                    await confetti({
                                        particleCount: 80,
                                        spread: 70,
                                        origin: { x: x / window.innerWidth, y: y / window.innerHeight },
                                    });

                                    form.reset();
                                    setAttachedFiles([]);
                                } else {
                                    alert("Failed to send email.");
                                }
                            } catch (err) {
                                console.error("Send email error:", err);
                                alert("Error sending email.");
                            }
                        }}
                    >
                        Send Message
                        <IoIosSend className="ml-2 text-sm" />
                    </ConfettiButton>
                </div>
            </form>
        </div>
    );
};
