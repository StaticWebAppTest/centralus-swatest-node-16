module.exports = async function (context, req) {
  const date = "2023-02-05T19:07:12.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

