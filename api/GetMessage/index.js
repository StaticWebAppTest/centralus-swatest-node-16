module.exports = async function (context, req) {
  const date = "2025-01-26T15:10:42.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

