import TeletravailModel from '../../models/teletravail';

const getTeletravails = async (req, res) => {
  try {
    const teletravails = await TeletravailModel.find();
    return res.status(200).json(teletravails);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Fetching Teletravails' });
  }
};
const getTeletravailById = async (req, res) => {
  const { id } = req.params;
  const teletravail = await TeletravailModel.findById(id).select('StartDate EndDate Type Status ');
  if (!teletravail) {
    return res.status(404).json({ message: 'Teletravail not found' });
  }

  return res.status(200).json(teletravail);
};
const createTeletravail = async (req, res) => {
  const { StartDate, EndDate, Type, Status } = req.body;
  if (!StartDate || !EndDate || !Type || !Status) {
    return res.status(400).json({ message: 'All fields are required' });
  }
  try {
    const result = await TeletravailModel.create({ StartDate, EndDate, Type, Status });
    return res.status(201).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Creating Teletravail' });
  }
};
const updateTeletravail = async (req, res) => {
  const { StartDate, EndDate, Type, Status } = req.body;
  const { id } = req.params;
  const teletravail = await TeletravailModel.findById(id);
  if (!teletravail) {
    return res.status(404).json({ message: 'Teletravail not found' });
  }
  if (StartDate) {
    teletravail.StartDate = StartDate;
  }
  if (EndDate) {
    teletravail.EndDate = EndDate;
  }
  if (Type) {
    teletravail.Type = Type;
  }
  if (Status) {
    teletravail.Status = Status;
  }
  try {
    const result = await teletravail.save();
    return res.status(200).json(result);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Updating Teletravail' });
  }
};
const deleteTeletravail = async (req, res) => {
  const { id } = req.params;
  const teletravail = await TeletravailModel.findById(id);
  if (!teletravail) {
    return res.status(404).json({ message: 'Teletravail not found' });
  }
  try {
    await TeletravailModel.deleteOne({ _id: id });
    return res.status(200).json({ message: 'Teletravail Deleted Successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Error Deleting Teletravail' });
  }
};
export { getTeletravails, getTeletravailById, createTeletravail, updateTeletravail, deleteTeletravail };
