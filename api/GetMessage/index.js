module.exports = async function (context, req) {
  const date = "2023-01-24T14:08:37.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

