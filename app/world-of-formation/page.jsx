"use client";

import { useEffect, useRef, useState } from "react";
import KyoobsFooter from "../components/KyoobsFooter";
import KyoobsHeader from "../components/KyoobsHeader";
import { formationVariants } from "../../src/formationVariants";

const ASSEMBLE_END = 0.66;
const HOLD_END = 0.82;

const stageDelay = {
  Background: 0,
  Ears: 0.04,
  Type: 0.08,
  Hair: 0.32,
  Hats: 0.32,
  Headband: 0.32,
  Mask: 0.32,
  Nose: 0.2,
  "Left Eye": 0.24,
  "Right Eye": 0.27,
  Mouth: 0.42
};

const clamp = (value, min = 0, max = 1) => Math.min(Math.max(value, min), max);
const easeOut = (value) => 1 - Math.pow(1 - clamp(value), 3);

function getLayerProgress(progress) {
  if (progress <= ASSEMBLE_END) {
    return easeOut(progress / ASSEMBLE_END);
  }

  if (progress <= HOLD_END) {
    return 1;
  }

  return 1 - easeOut((progress - HOLD_END) / (1 - HOLD_END));
}

function FormationLayer({ layer, progress, isLocked }) {
  const delay = stageDelay[layer.category] ?? 0.16;
  const cycleProgress = getLayerProgress(progress);
  const localProgress = isLocked ? 1 : easeOut((cycleProgress - delay) / 0.52);
  const x = layer.startPosition.x + (layer.targetPosition.x - layer.startPosition.x) * localProgress;
  const y = layer.startPosition.y + (layer.targetPosition.y - layer.startPosition.y) * localProgress;
  const rotation = layer.rotation * (1 - localProgress);
  const depthScale = layer.depth === "far" ? 0.95 : layer.depth === "foreground" ? 1.03 : 1;
  const size = "48vmin";
  const opacity = 0.34 + localProgress * 0.66;

  return (
    <img
      className={`formation-layer ${layer.depth}${isLocked ? " is-locked" : ""}`}
      src={layer.src}
      alt=""
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        zIndex: layer.zIndex,
        opacity,
        transform: `translate(-50%, -50%) rotate(${rotation}deg) scale(${layer.scale * depthScale})`
      }}
    />
  );
}

export default function WorldOfFormationPage() {
  const formationRoomRef = useRef(null);
  const [formationProgress, setFormationProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const element = formationRoomRef.current;
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const scrollable = Math.max(element.offsetHeight - window.innerHeight, 1);
      setFormationProgress(clamp(-rect.top / scrollable));
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const variantIndex = Math.min(
    formationVariants.length - 1,
    Math.floor(formationProgress * formationVariants.length)
  );
  const variantProgress = formationProgress * formationVariants.length - variantIndex;
  const activeVariant = formationVariants[variantIndex];
  const isLocked = variantProgress > ASSEMBLE_END && variantProgress <= HOLD_END;
  const visibleLayers = activeVariant.layers.filter((layer) => layer.category !== "Background");

  return (
    <main className="site-shell">
      <KyoobsHeader />
      <section className="formation-room" id="formation-room" ref={formationRoomRef}>
        <div className="formation-stage">
          <div className="formation-header">
            <span>
              FORMATION {variantIndex + 1} / {formationVariants.length}
            </span>
          </div>

          <div className="formation-copy">
            <span className="kicker">THE WORLD OF FORMATION</span>
            <h2>Identity assembles before it appears.</h2>
            <p>
              The world of formation is made of fragments. Each fragment is a trait. The unique identity of each Kyoob is
              made by the combination of their traits.
            </p>
          </div>

          <div className="formation-canvas" aria-label="Animated Kyoob formation field">
            {visibleLayers.map((layer) => (
              <FormationLayer
                key={`${activeVariant.id}-${layer.id}`}
                layer={layer}
                progress={variantProgress}
                isLocked={isLocked}
              />
            ))}
          </div>
        </div>
      </section>

      <KyoobsFooter />
    </main>
  );
}
