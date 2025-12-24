module.exports = async function (context, req) {
  const date = "2025-12-24T15:14:56.352Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

