import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import { GameQuery } from "../App";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  gameQuery: GameQuery;
}

const GenreList = ({ onSelectGenre, gameQuery }: Props) => {
  const { data, loading, error } = useGenres();
  if (error) return null;
  if (loading) return <Spinner></Spinner>;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background)}
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
              ></Image>
              <Button
                textAlign={"left"}
                whiteSpace={"normal"}
                fontWeight={
                  genre.id === gameQuery.genre?.id ? "bold" : "normal"
                }
                variant={"link"}
                fontSize={"lg"}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
