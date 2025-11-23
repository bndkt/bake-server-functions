"use server";

export const hello = async (greeting: string): Promise<string> => {
  return `${greeting}, world!`;
};
