module.exports = async function (context, req) {
  const date = "2025-05-26T21:11:34.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

