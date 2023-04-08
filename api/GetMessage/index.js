module.exports = async function (context, req) {
  const date = "2023-04-08T22:07:42.081Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

