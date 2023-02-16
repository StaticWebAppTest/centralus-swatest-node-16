module.exports = async function (context, req) {
  const date = "2023-02-16T23:10:28.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

