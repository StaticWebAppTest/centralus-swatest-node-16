module.exports = async function (context, req) {
  const date = "2024-08-17T20:11:10.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

