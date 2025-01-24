module.exports = async function (context, req) {
  const date = "2025-01-24T05:11:39.642Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

