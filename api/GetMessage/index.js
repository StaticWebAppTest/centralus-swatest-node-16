module.exports = async function (context, req) {
  const date = "2025-06-24T17:14:03.984Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

