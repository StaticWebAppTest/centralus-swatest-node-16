module.exports = async function (context, req) {
  const date = "2025-01-22T18:16:17.439Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

