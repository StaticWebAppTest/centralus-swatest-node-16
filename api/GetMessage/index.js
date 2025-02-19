module.exports = async function (context, req) {
  const date = "2025-02-19T09:12:39.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

