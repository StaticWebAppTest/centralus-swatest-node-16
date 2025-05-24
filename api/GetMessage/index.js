module.exports = async function (context, req) {
  const date = "2025-05-24T08:15:27.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

