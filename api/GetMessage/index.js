module.exports = async function (context, req) {
  const date = "2022-07-26T12:20:54.166Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

