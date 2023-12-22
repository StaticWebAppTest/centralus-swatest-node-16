module.exports = async function (context, req) {
  const date = "2023-12-22T03:10:04.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

