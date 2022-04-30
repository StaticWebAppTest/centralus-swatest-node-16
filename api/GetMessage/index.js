module.exports = async function (context, req) {
  const date = "2022-04-30T12:17:29.745Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

