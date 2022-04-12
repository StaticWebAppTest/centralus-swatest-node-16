module.exports = async function (context, req) {
  const date = "2022-04-12T22:10:09.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

