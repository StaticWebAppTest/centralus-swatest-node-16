module.exports = async function (context, req) {
  const date = "2022-12-06T04:11:16.097Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

