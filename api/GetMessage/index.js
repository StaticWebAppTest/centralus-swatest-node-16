module.exports = async function (context, req) {
  const date = "2023-09-05T13:11:34.233Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

