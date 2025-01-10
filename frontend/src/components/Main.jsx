import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchJobs,
  createJob,
  updateJob,
  deleteJob,
} from '../features/jobSlice';
import JobForm from './main_components/JobForm';
import Card from './main_components/Card';
import Filter from './main_components/Filter';

const Main = () => {
  const dispatch = useDispatch();
  const { jobs, status, error } = useSelector((state) => state.jobs);
  const [selectedJob, setSelectedJob] = useState(null);

  // State for filters
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleAddOrUpdateJob = (jobData) => {
    if (selectedJob) {
      dispatch(updateJob({ id: selectedJob._id, job: jobData }));
      setSelectedJob(null);
    } else {
      dispatch(createJob(jobData));
    }
  };

  const handleEdit = (job) => {
    setSelectedJob(job);
    document.querySelector('#job_modal').showModal();
  };

  const handleDelete = (id) => {
    dispatch(deleteJob(id));
  };

  // Filter Handlers
  const addFilter = (filter) => {
    if (typeof filter === 'string' && filter.trim() !== '') {
      setFilters((prevFilters) => {
        const lowerCasedFilter = filter.toLowerCase();
        if (!prevFilters.includes(lowerCasedFilter)) {
          return [...prevFilters, lowerCasedFilter];
        }
        return prevFilters;
      });
    } else {
      console.error('Invalid filter:', filter);
    }
  };

  const removeFilter = (filter) => {
    setFilters((prevFilters) =>
      prevFilters.filter((f) => f !== filter.toLowerCase())
    );
    // console.log('New Filters:', filter);
  };

  const clearFilters = () => {
    setFilters([]);
  };

  // Filtering Jobs
  const filteredJobs = jobs.filter((job) => {
    const jobFilters = [
      ...job.role,
      job.level,
      ...(job.languages || []),
      ...(job.tools || []),
    ]
      .filter((f) => typeof f === 'string' && f.trim()) // Ensure valid strings
      .map((f) => f.toLowerCase().trim());

    // console.log('Filters:', filters);
    // console.log('Job Filters:', jobFilters);

    return filters.every((filter) => jobFilters.includes(filter.trim()));
  });

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <main className="relative flex flex-col justify-center items-center w-screen h-full pb-64P">
      <JobForm
        onSubmit={handleAddOrUpdateJob}
        editingJob={selectedJob}
        formMode={selectedJob ? 'edit' : 'create'}
      />

      {filters.length > 0 && (
        <Filter
          filters={filters}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
      )}

      <div className="flex flex-col gap-12 lg:gap-2">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Card
              key={job._id}
              job={job}
              onEdit={() => handleEdit(job)}
              onDelete={() => handleDelete(job._id)}
              onFilterClick={addFilter}
            />
          ))
        ) : (
          <div>No jobs available</div>
        )}
      </div>
    </main>
  );
};

export default Main;
