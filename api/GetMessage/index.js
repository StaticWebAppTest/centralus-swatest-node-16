module.exports = async function (context, req) {
  const date = "2023-04-26T10:09:43.641Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

