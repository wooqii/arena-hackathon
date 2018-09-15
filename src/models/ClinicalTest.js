class ClinicalTest {
  constructor({
    companyAddress,
    subject,
    title,
    gender,
    age,
    bmi,
    smoking,
    volume,
    disease
  } = {}) {
    this.companyAddress = companyAddress
    this.subject = subject
    this.title = title
    this.gender = gender
    this.age = age
    this.bmi = bmi
    this.smoking = smoking
    this.volume = volume
    this.disease = disease
  }
}

module.exports = {
  ClinicalTest
}
