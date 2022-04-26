module.exports = async function (context, req) {
  const date = "2022-04-26T05:14:04.603Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

