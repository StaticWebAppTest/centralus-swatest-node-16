module.exports = async function (context, req) {
  const date = "2025-03-29T12:21:46.740Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

