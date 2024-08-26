module.exports = async function (context, req) {
  const date = "2024-08-26T06:15:56.980Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

