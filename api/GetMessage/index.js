module.exports = async function (context, req) {
  const date = "2023-02-26T02:34:38.152Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

