module.exports = async function (context, req) {
  const date = "2025-02-06T12:22:56.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

