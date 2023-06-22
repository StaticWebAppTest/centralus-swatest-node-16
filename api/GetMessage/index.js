module.exports = async function (context, req) {
  const date = "2023-06-22T23:11:05.244Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

