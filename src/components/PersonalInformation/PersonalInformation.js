const PersonalInformation = () => {
  return (
    <>
      <section className="form-section">
        <h2 className="form-title">Personal Information</h2>
        <form className="form">
          <div className="form-block">
            <label className="label" htmlFor="name">
              Name:
            </label>
            <input type="text" name="name" placeholder="" />
          </div>
          <div className="form-block">
            <label className="label" htmlFor="lastName">
              Last name:
            </label>
            <input type="text" name="lastName" placeholder="" />
          </div>
          <div className="form-block">
            <label className="label" htmlFor="birthdate">
              Birthdate:
            </label>
            <input type="date" name="birthdate" />
          </div>
          <div className="form-block">
            <label className="label" htmlFor="email">
              Email:{" "}
            </label>
            <input type="email" name="" id="" />
          </div>
          <button className="button" type="submit">
            Next
          </button>
        </form>
      </section>
    </>
  );
};

export default PersonalInformation;
