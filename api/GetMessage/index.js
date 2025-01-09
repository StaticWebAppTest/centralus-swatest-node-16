module.exports = async function (context, req) {
  const date = "2025-01-09T16:14:31.919Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

