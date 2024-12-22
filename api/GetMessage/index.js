module.exports = async function (context, req) {
  const date = "2024-12-22T07:09:53.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

