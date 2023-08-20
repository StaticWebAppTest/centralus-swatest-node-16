module.exports = async function (context, req) {
  const date = "2023-08-20T15:07:20.180Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

