module.exports = async function (context, req) {
  const date = "2024-06-18T20:11:29.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

