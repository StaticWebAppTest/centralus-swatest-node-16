module.exports = async function (context, req) {
  const date = "2024-09-03T17:11:08.254Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

