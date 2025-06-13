module.exports = async function (context, req) {
  const date = "2025-06-13T13:26:50.033Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

