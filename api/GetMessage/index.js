module.exports = async function (context, req) {
  const date = "2023-11-07T03:09:26.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

