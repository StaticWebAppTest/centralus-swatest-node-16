module.exports = async function (context, req) {
  const date = "2023-09-17T10:08:01.383Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

