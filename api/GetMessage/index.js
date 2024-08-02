module.exports = async function (context, req) {
  const date = "2024-08-02T08:13:29.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

