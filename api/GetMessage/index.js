module.exports = async function (context, req) {
  const date = "2023-01-26T20:09:05.115Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

