module.exports = async function (context, req) {
  const date = "2024-06-16T04:12:02.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

