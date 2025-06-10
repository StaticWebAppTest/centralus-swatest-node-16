module.exports = async function (context, req) {
  const date = "2025-06-10T14:14:00.570Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

