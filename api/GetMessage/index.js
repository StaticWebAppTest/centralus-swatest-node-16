module.exports = async function (context, req) {
  const date = "2023-06-07T09:08:29.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

