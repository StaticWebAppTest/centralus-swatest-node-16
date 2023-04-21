module.exports = async function (context, req) {
  const date = "2023-04-21T13:11:29.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

