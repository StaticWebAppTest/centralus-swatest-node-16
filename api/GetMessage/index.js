module.exports = async function (context, req) {
  const date = "2022-09-06T07:33:27.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

