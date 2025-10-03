module.exports = async function (context, req) {
  const date = "2025-10-03T08:16:29.504Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

