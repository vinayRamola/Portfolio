import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const CodingProfile = () => {
  const profiles = {
    codolio: "https://codolio.com/profile/qiBdphiK",
    leetcode: {
      url: "https://leetcode.com/u/vinaychandramola123/",
      maxRating: 1930,
      title: "Knight",
    },
    codechef: {
      url: "https://www.codechef.com/users/vinay_ramola",
      maxRating: 1701,
      title: "3★ Chef",
    },
    codeforces: {
      url: "https://codeforces.com/profile/vinayRamola123",
      maxRating: 1374,
      title: "Pupil",
    },
  };

  return (
    <div className="pt-6 rounded-lg shadow-lg w-{100%}">
      {/* Heading */}
      <a
        href={profiles.codolio}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-xl font-bold text-indigo-500 hover:underline"
      >
        Coding Profile <FaExternalLinkAlt className="ml-2 text-sm" />
      </a>

      {/* Profiles */}
      <div className="mt-6 space-y-6">
        {/* LeetCode */}
        <div className="border-l-4 border-yellow-400 pl-4">
          <a
            href={profiles.leetcode.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium text-yellow-400 hover:underline"
          >
            LeetCode <FaExternalLinkAlt className="ml-2 text-sm" />
          </a>
          <p className="text-sm text-gray-400">
            Max Rating: <span className="font-semibold">{profiles.leetcode.maxRating}</span>
          </p>
          <p className="text-sm text-gray-400">
            Title: <span className="font-semibold">{profiles.leetcode.title}</span>
          </p>
        </div>

        {/* CodeChef */}
        <div className="border-l-4 border-orange-500 pl-4">
          <a
            href={profiles.codechef.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium text-orange-500 hover:underline"
          >
            CodeChef <FaExternalLinkAlt className="ml-2 text-sm" />
          </a>
          <p className="text-sm text-gray-400">
            Max Rating: <span className="font-semibold">{profiles.codechef.maxRating}</span>
          </p>
          <p className="text-sm text-gray-400">
            Title: <span className="font-semibold">{profiles.codechef.title}</span>
          </p>
        </div>

        {/* Codeforces */}
        <div className="border-l-4 border-blue-500 pl-4">
          <a
            href={profiles.codeforces.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-lg font-medium text-blue-500 hover:underline"
          >
            Codeforces <FaExternalLinkAlt className="ml-2 text-sm" />
          </a>
          <p className="text-sm text-gray-400">
            Max Rating: <span className="font-semibold">{profiles.codeforces.maxRating}</span>
          </p>
          <p className="text-sm text-gray-400">
            Title: <span className="font-semibold">{profiles.codeforces.title}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CodingProfile;
