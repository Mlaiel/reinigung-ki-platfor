import { useState, useEffect, useCallback, useRef } from 'react'

// Create a simplified useKV hook that uses localStorage as fallback
export function useKV<T>(key: string, defaultValue: T): [T, (value: T | ((prev: T) => T)) => void, () => void] {
  const [value, setValue] = useState<T>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch {
      return defaultValue
    }
  })

  const valueRef = useRef<T>(value)
  
  useEffect(() => {
    valueRef.current = value
  }, [value])

  const setStoredValue = useCallback((newValue: T | ((prev: T) => T)) => {
    try {
      const valueToStore = newValue instanceof Function ? newValue(valueRef.current) : newValue
      setValue(valueToStore)
      localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.error('Error saving to localStorage:', error)
    }
  }, [key])

  const deleteValue = useCallback(() => {
    try {
      localStorage.removeItem(key)
      setValue(defaultValue)
    } catch (error) {
      console.error('Error removing from localStorage:', error)
    }
  }, [key, defaultValue])

  return [value, setStoredValue, deleteValue]
}