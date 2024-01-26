module.exports = async function (context, req) {
  const date = "2024-01-26T04:11:55.998Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

