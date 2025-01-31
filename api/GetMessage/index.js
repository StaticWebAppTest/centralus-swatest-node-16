module.exports = async function (context, req) {
  const date = "2025-01-31T19:09:03.789Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

