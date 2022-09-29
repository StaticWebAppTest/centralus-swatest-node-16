module.exports = async function (context, req) {
  const date = "2022-09-29T20:14:49.053Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

