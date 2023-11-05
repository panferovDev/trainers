import React, { useState } from 'react';
import { FormControl, FormLabel, Image, VStack, Input, Button, Textarea } from '@chakra-ui/react';
import ololo from '../../assets/ololo.png';
import { useSubmitTrainer } from '../../hooks/useSubmitTrainer';

export default function AddTrainer(): JSX.Element {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const { submitTrainer } = useSubmitTrainer();

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="grid gap-3 grid-cols-2 mt-4 w-1/2 p-4 rounded-lg border border-sky-500">
      <div className="w-full">
        <form onSubmit={submitTrainer}>
          <VStack spacing={4} align="stretch">
            <FormControl id="name" isRequired>
              <FormLabel>Имя</FormLabel>
              <Input name="name" placeholder="Имя тренера" />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Информация</FormLabel>
              <Textarea name="info" placeholder="Информация о тренере" />
            </FormControl>
            <FormControl id="surname" isRequired>
              <FormLabel>Фото</FormLabel>
              <input name="file" type="file" onChange={handleImageUpload} />
            </FormControl>
            <Button type="submit" colorScheme="blue" variant="outline">
              OK
            </Button>
          </VStack>
        </form>
      </div>

      <div className="flex flex-row justify-center items-center">
        <Image
          src={selectedImage || ololo}
          alt="Dan Abramov"
          height="100%"
          objectFit="cover"
          rounded="lg"
        />
      </div>
    </div>
  );
}
