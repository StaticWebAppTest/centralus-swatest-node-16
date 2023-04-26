module.exports = async function (context, req) {
  const date = "2023-04-26T19:07:31.771Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

