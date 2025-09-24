module.exports = async function (context, req) {
  const date = "2025-09-24T16:16:32.746Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

