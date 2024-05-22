module.exports = async function (context, req) {
  const date = "2024-05-22T12:18:38.083Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

