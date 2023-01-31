module.exports = async function (context, req) {
  const date = "2023-01-31T11:08:01.324Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

