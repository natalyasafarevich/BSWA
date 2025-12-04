import { GenreCheckbox } from '@/shared/ui/genre-checkbox/GenreCheckbox';
import s from './Genres.module.scss';
import { POPULAR_GENRES } from '../lib/genres';
import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { UserSettingsSchemaData } from '@/shared/schemes/userSettingSchemes';

type Props = {
  control: Control<UserSettingsSchemaData>;
  error?: string;
};
export const Genres = ({ control, error }: Props) => {
  return (
    <div>
      <p className="h2">Genres</p>
      <Controller
        name="genres"
        control={control}
        defaultValue={[]}
        render={({ field }) => {
          const value = field.value || [];
          return (
            <div className={s.row}>
              {POPULAR_GENRES.map((genre, i) => (
                <div className={s.genre} key={i}>
                  <GenreCheckbox
                    id={genre + i}
                    label={genre}
                    checked={value.includes(genre)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        field.onChange([...value, genre]);
                      } else {
                        field.onChange(value.filter((g: string) => g !== genre));
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          );
        }}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
};
