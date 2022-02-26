module.exports = async function (context, req) {
  const date = "2022-02-26T19:07:28.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

