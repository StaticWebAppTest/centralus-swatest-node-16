module.exports = async function (context, req) {
  const date = "2022-03-12T10:10:33.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

