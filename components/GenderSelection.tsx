import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type Gender = 'male' | 'female' | null;

const GenderSelection = () => {
  const [selectedGender, setSelectedGender] = useState<Gender>(null);

  const genderOptions = [
    {
      type: 'male' as const,
      icon: '👨',
      label: 'For Him',
      message: "A rose for the man who makes hearts bloom",
      gradient: 'from-rose-deep/90 to-rose-deep',
    },
    {
      type: 'female' as const,
      icon: '👩',
      label: 'For Her',
      message: "A rose for the woman who colors the world with love",
      gradient: 'from-rose-soft to-rose-glow',
    },
  ];

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-rose-blush/30 to-transparent" />
      
      <div className="relative container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-4xl mb-4 block">💐</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            Who's the rose for?
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Choose to receive a personalized message of love
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {genderOptions.map((option, index) => (
            <motion.div
              key={option.type}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.button
                onClick={() => setSelectedGender(option.type)}
                className={`relative w-full p-8 rounded-3xl glass overflow-hidden group transition-all duration-500 ${
                  selectedGender === option.type
                    ? 'ring-4 ring-rose-deep shadow-glow'
                    : 'hover:shadow-rose'
                }`}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                data-interactive
              >
                {/* Floating petals on hover */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute text-2xl opacity-0 group-hover:opacity-100"
                      initial={{ y: 100, x: 20 + i * 50, rotate: 0 }}
                      animate={selectedGender === option.type ? {
                        y: -100,
                        rotate: 360,
                        transition: { duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }
                      } : {}}
                      whileHover={{
                        y: -100,
                        rotate: 360,
                        transition: { duration: 2 + i * 0.5, repeat: Infinity, delay: i * 0.3 }
                      }}
                    >
                      🌹
                    </motion.div>
                  ))}
                </div>

                {/* Gradient overlay on selection */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0`}
                  animate={{ opacity: selectedGender === option.type ? 0.1 : 0 }}
                />

                <div className="relative z-10">
                  <motion.div
                    className="text-6xl mb-4"
                    animate={selectedGender === option.type ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    {option.icon}
                  </motion.div>
                  
                  <h3 className="font-serif text-2xl font-semibold text-foreground mb-2">
                    {option.label}
                  </h3>
                  
                  <div className="flex items-center justify-center gap-2 text-rose-deep">
                    <span className="text-xl">🌹</span>
                    <span className="h-px w-12 bg-rose-soft" />
                    <span className="text-xl">🌹</span>
                  </div>
                </div>

                {/* Selection indicator */}
                <AnimatePresence>
                  {selectedGender === option.type && (
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      className="absolute top-4 right-4 w-8 h-8 bg-rose-deep rounded-full flex items-center justify-center"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </div>

        {/* Personalized Message */}
        <AnimatePresence mode="wait">
          {selectedGender && (
            <motion.div
              key={selectedGender}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="glass rounded-3xl p-8 max-w-2xl mx-auto shadow-rose">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.2 }}
                  className="text-4xl mb-4"
                >
                  🌹
                </motion.div>
                <p className="font-serif text-2xl md:text-3xl text-rose-deep italic">
                  "{genderOptions.find(g => g.type === selectedGender)?.message}"
                </p>
                <motion.div
                  className="mt-6 flex justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.span
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="text-xl"
                    >
                      🌹
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default GenderSelection;
