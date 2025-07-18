'use client';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download } from 'lucide-react';

interface Props {
  title: string;
  image: string;
  pdf: string;
}

export default function CertificateCard({ title, image, pdf }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="cursor-pointer group relative"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={image}
          alt={title}
          width={500}
          height={300}
          className="rounded-xl border border-slate-700 shadow-md group-hover:opacity-80 transition"
        />
        <p className="mt-2 text-center text-sm text-slate-300">{title}</p>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-slate-900 p-6 rounded-xl relative max-w-3xl w-full"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={image}
                alt={title}
                width={1000}
                height={600}
                className="rounded-md mb-4"
              />
              <div className="flex justify-between items-center text-white">
                <h3 className="text-xl font-bold">{title}</h3>
                <a
                  href={pdf}
                  download
                  className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded text-sm"
                >
                  <Download size={16} />
                  Descargar PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
