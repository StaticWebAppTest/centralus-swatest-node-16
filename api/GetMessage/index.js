module.exports = async function (context, req) {
  const date = "2025-04-03T21:11:49.256Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

