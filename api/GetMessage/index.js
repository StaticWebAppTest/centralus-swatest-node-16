module.exports = async function (context, req) {
  const date = "2023-12-03T22:07:59.237Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

