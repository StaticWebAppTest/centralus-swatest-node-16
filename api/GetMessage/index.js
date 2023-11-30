module.exports = async function (context, req) {
  const date = "2023-11-30T16:12:29.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

