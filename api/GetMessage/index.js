module.exports = async function (context, req) {
  const date = "2025-12-12T12:29:50.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

