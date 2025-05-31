module.exports = async function (context, req) {
  const date = "2025-05-31T18:17:05.481Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

