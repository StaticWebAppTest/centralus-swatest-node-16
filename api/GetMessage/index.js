module.exports = async function (context, req) {
  const date = "2023-08-22T03:09:00.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

