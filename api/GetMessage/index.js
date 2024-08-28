module.exports = async function (context, req) {
  const date = "2024-08-28T16:13:55.123Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

