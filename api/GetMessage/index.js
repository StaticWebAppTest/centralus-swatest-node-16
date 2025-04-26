module.exports = async function (context, req) {
  const date = "2025-04-26T17:09:53.787Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

