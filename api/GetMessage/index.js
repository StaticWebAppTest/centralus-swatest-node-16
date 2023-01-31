module.exports = async function (context, req) {
  const date = "2023-01-31T15:09:58.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

