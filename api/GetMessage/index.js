module.exports = async function (context, req) {
  const date = "2025-08-03T15:13:32.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

