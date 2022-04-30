module.exports = async function (context, req) {
  const date = "2022-04-30T08:12:59.471Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

