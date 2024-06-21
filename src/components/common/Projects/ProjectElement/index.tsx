import type { ProjectElementProps } from './interface';

import { Card, CardContent, CardMedia, CardActions } from '@mui/material';
import Button from 'components/common/Button';

const ProjectElement = ({
  description,
  image,
  link,
  title,
}: ProjectElementProps) => {
  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia component="img" alt="green iguana" image={image} />
      <CardContent>{title}</CardContent>
      <CardContent>{description}</CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default ProjectElement;
