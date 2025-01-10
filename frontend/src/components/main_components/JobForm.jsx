import { useState, useEffect, useRef } from 'react';

const JobForm = ({ onSubmit, editingJob, formMode }) => {
  const modalRef = useRef(null);

  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [location, setLocation] = useState('');
  const [contract, setContract] = useState('');
  const [isNew, setIsNew] = useState(false);
  const [isFeatured, setIsFeatured] = useState(false);
  const [tags, setTags] = useState('');
  const [logo, setLogo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    if (formMode === 'edit' && editingJob) {
      setCompany(editingJob.company || '');
      setPosition(editingJob.position || '');
      setLocation(editingJob.location || '');
      setContract(editingJob.contract || '');
      setIsNew(editingJob.new || false);
      setIsFeatured(editingJob.featured || false);
      const allTags = [
        editingJob.role,
        editingJob.level,
        ...(editingJob.languages || []),
        ...(editingJob.tools || []),
      ];
      setTags(allTags.join(', '));
      setLogo(editingJob.logo || null); // Load existing logo for editing
    } else {
      resetForm();
    }
  }, [formMode, editingJob]);

  const resetForm = () => {
    setCompany('');
    setPosition('');
    setLocation('');
    setContract('');
    setIsNew(false);
    setIsFeatured(false);
    setTags('');
    setLogo(null); // Reset logo
  };

  const handleLogoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        // 2 MB limit
        setError('Image too big. Maximum size is 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result);
        setError(''); // Clear any previous error
      };
      reader.readAsDataURL(file);
    }
  };

  // const handleLogoChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = () => {
  //       setLogo(reader.result);
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const tagArray = tags.split(',').map((tag) => tag.trim());
    if (tagArray.length < 2) {
      alert('Tags must include at least a role and a level.');
      return;
    }

    const [role, level, ...rest] = tagArray;
    const languages = rest.filter((tag) => !tag.startsWith('Tool:'));
    const tools = rest
      .filter((tag) => tag.startsWith('Tool:'))
      .map((tag) => tag.replace('Tool:', '').trim());

    onSubmit({
      company,
      position,
      location,
      contract,
      new: isNew,
      featured: isFeatured,
      role,
      level,
      languages,
      tools,
      logo, // Include logo in the submission
    });

    resetForm();
    modalRef.current?.close();
  };

  return (
    <>
      <button
        className="btn my-16M relative bottom-32I bg-blue-500 text-white font-bold border-none uppercase"
        onClick={() => modalRef.current.showModal()}
      >
        {formMode === 'edit' ? 'Edit Job' : 'Create Job'}
      </button>

      <dialog id="job_modal" className="modal" ref={modalRef}>
        <div className="modal-box">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 text-white"
          >
            <input
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required
              className="rounded-5BR p-8P bg-black"
            />
            <input
              type="text"
              placeholder="Position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="rounded-5BR p-8P bg-black"
            />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="rounded-5BR p-8P bg-black"
            />
            <input
              type="text"
              placeholder="Contract"
              value={contract}
              onChange={(e) => setContract(e.target.value)}
              required
              className="rounded-5BR p-8P bg-black"
            />
            <input
              type="text"
              placeholder="Tags (e.g., Fullstack, Senior, JavaScript, React)"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="rounded-5BR p-8P bg-black"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleLogoChange}
              className="file-input w-full"
              aria-label="Upload Image"
            />
            {error && <p className="text-red-500">{error}</p>}
            {logo && (
              <img
                src={logo}
                alt="Preview"
                className="max-w-full h-auto border border-gray-300 rounded-md mt-2"
              />
            )}
            <div className="flex gap-2">
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={isNew}
                  onChange={(e) => setIsNew(e.target.checked)}
                />
                <span>New</span>
              </label>
              <label className="flex gap-2">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                />
                <span>Featured</span>
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 rounded text-white p-2 hover:bg-blue-600"
            >
              {formMode === 'edit' ? 'Update Job' : 'Add Job'}
            </button>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={() => modalRef.current.close()}>
            Close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default JobForm;
