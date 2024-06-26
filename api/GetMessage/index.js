module.exports = async function (context, req) {
  const date = "2024-06-26T23:10:06.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

