module.exports = async function (context, req) {
  const date = "2024-05-24T00:44:55.445Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

