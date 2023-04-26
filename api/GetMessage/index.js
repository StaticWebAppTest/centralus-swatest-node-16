module.exports = async function (context, req) {
  const date = "2023-04-26T03:09:35.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

