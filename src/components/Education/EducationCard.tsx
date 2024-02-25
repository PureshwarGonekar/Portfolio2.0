import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';

type Props = {
  id: number;
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
};

function EducationCard({ id, institution, course, startYear, endYear }: Props) {
    return (
        <div>
            <div key={id} >
                <div>
                    {/* <img src={theme.type === 'light' ? eduImgBlack : eduImgWhite} alt="" /> */}
                </div>
                <div className="education-details">
                    <h6 >{startYear}-{endYear}</h6>
                    <h4>{course}</h4>
                    <h5>{institution}</h5>
                </div>
            </div>
        </div>        
    )
}

export default EducationCard