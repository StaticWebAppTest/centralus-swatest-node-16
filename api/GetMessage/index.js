module.exports = async function (context, req) {
  const date = "2024-08-30T20:12:31.791Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

