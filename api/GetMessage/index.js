module.exports = async function (context, req) {
  const date = "2024-08-05T16:12:52.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

