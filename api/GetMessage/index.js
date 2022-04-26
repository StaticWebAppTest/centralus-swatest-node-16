module.exports = async function (context, req) {
  const date = "2022-04-26T04:22:20.463Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

