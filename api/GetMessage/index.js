module.exports = async function (context, req) {
  const date = "2023-02-17T22:09:17.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

