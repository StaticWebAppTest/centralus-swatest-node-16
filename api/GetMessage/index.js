module.exports = async function (context, req) {
  const date = "2023-12-27T03:10:05.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

