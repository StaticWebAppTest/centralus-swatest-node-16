module.exports = async function (context, req) {
  const date = "2022-02-26T16:12:29.218Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

