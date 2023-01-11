import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { getCategories } from '../services';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return <div>Categories</div>;
};

export default Categories;
