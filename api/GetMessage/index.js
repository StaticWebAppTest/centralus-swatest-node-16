module.exports = async function (context, req) {
  const date = "2023-05-26T10:09:25.019Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

