module.exports = async function (context, req) {
  const date = "2022-02-26T10:10:08.513Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

