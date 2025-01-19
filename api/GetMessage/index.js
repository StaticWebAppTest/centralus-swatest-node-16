module.exports = async function (context, req) {
  const date = "2025-01-19T22:11:27.091Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

