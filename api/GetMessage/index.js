module.exports = async function (context, req) {
  const date = "2022-07-21T07:09:49.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

