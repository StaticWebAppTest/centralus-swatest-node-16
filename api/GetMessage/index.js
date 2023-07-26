module.exports = async function (context, req) {
  const date = "2023-07-26T14:08:07.611Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

