module.exports = async function (context, req) {
  const date = "2025-12-03T10:16:55.142Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

