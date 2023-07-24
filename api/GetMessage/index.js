module.exports = async function (context, req) {
  const date = "2023-07-24T03:09:46.594Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

