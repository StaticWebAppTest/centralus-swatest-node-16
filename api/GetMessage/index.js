module.exports = async function (context, req) {
  const date = "2025-07-12T22:12:43.678Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

