module.exports = async function (context, req) {
  const date = "2025-02-24T19:09:49.582Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

