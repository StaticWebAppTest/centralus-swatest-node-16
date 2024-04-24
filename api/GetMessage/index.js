module.exports = async function (context, req) {
  const date = "2024-04-24T10:11:03.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

