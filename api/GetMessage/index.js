module.exports = async function (context, req) {
  const date = "2023-07-17T22:08:35.250Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

