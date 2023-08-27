module.exports = async function (context, req) {
  const date = "2023-08-27T02:15:21.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

