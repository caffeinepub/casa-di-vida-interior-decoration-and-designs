import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export function useContactSubmission() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: ContactFormData) => {
      if (!actor) {
        throw new Error('Actor not initialized');
      }

      const result = await actor.submitContact(
        data.name,
        data.email,
        data.phone,
        data.projectType,
        data.message
      );

      if (!result) {
        throw new Error('Failed to submit contact form');
      }

      return result;
    },
    onSuccess: () => {
      // Invalidate any queries that might depend on contact submissions
      queryClient.invalidateQueries({ queryKey: ['submissions'] });
    }
  });
}
