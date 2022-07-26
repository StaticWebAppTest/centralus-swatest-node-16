module.exports = async function (context, req) {
  const date = "2022-07-26T05:09:21.204Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

