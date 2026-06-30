import useAvatarPhysics from "./useAvatarPhysics";

export default function SectionAvatar({
  image,
  text
}) {
  const ref = useAvatarPhysics();

  return (
    <div
      ref={ref}
      className="sec-avatar"
    >
      <div className="dialog-box">
        {text}
      </div>

      <div className="av-stage">

        <div className="av-face">

          <img
            src={image}
            alt="Avatar"
            className="av-image"
          />

        </div>

      </div>

      <div className="av-shadow" />
    </div>
  );
}

