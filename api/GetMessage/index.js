module.exports = async function (context, req) {
  const date = "2024-03-14T22:08:09.393Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

