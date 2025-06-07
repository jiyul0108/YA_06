import React from 'react';
import Button from './Button';
import Textarea from './Textarea';
function NoteDetail() {
  // 예시 데이터
  const title = '오늘 할 일 정리';
  const date = '2025-06-07';
  const content = `- 아침 운동\n- 점심 약속\n- React 과제 마무리`;

  return (
    <div>
      <div>{title}</div>

      <div>
        <span>{date}</span>
        <Button text={"★"}/>
      </div>
      <Textarea readOnly/>

      <div>
        <Button text={"삭제"}/>
        <Button text={"수정"}/>
        <Button text={"내보내기"}/>
      </div>
    </div>
  );
}

export default NoteDetail;
