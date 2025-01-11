module.exports = async function (context, req) {
  const date = "2025-01-11T18:14:41.070Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

