module.exports = async function (context, req) {
  const date = "2023-04-01T18:09:52.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

