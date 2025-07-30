module.exports = async function (context, req) {
  const date = "2025-07-30T20:14:54.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

