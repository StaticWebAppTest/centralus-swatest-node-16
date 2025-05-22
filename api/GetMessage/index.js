module.exports = async function (context, req) {
  const date = "2025-05-22T22:12:52.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

