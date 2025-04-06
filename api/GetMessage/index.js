module.exports = async function (context, req) {
  const date = "2025-04-06T04:14:54.829Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

