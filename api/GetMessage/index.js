module.exports = async function (context, req) {
  const date = "2025-01-03T23:11:14.417Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

