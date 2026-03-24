'use client';

import { type UserProgress, getRango, getAvatarEtapa } from '@/types/content';

export type { UserProgress };

const STORAGE_KEY = 'defo_progress';

const defaultProgress: UserProgress = {
  xp: 0,
  completedChallenges: [],
  completedModules: [],
  medals: [],
};

export function getProgress(): UserProgress {
  if (typeof window === 'undefined') return defaultProgress;
  
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) return defaultProgress;
  
  try {
    return JSON.parse(stored) as UserProgress;
  } catch {
    return defaultProgress;
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function addXP(amount: number): UserProgress {
  const progress = getProgress();
  progress.xp += amount;
  saveProgress(progress);
  return progress;
}

export function completeChallenge(challengeId: string, xp: number, medal?: string): UserProgress {
  const progress = getProgress();
  
  if (!progress.completedChallenges.includes(challengeId)) {
    progress.completedChallenges.push(challengeId);
    progress.xp += xp;
    
    if (medal) {
      progress.medals.push(medal);
    }
  }
  
  saveProgress(progress);
  return progress;
}

export function completeModule(moduleId: string): UserProgress {
  const progress = getProgress();
  
  if (!progress.completedModules.includes(moduleId)) {
    progress.completedModules.push(moduleId);
  }
  
  saveProgress(progress);
  return progress;
}

export function isChallengeCompleted(challengeId: string): boolean {
  const progress = getProgress();
  return progress.completedChallenges.includes(challengeId);
}

export function isModuleCompleted(moduleId: string): boolean {
  const progress = getProgress();
  return progress.completedModules.includes(moduleId);
}

export function getUserRango(): string {
  const progress = getProgress();
  return getRango(progress.xp);
}

export function getUserAvatarEtapa(): string {
  const progress = getProgress();
  return getAvatarEtapa(progress.completedModules.length);
}

export function resetProgress(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}
