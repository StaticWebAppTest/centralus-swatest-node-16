module.exports = async function (context, req) {
  const date = "2023-05-26T22:08:14.684Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

