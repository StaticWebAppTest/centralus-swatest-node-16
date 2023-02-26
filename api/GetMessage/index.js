module.exports = async function (context, req) {
  const date = "2023-02-26T09:09:20.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

