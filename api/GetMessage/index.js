module.exports = async function (context, req) {
  const date = "2025-01-19T21:09:52.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

