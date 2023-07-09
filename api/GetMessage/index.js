module.exports = async function (context, req) {
  const date = "2023-07-09T10:09:29.229Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

