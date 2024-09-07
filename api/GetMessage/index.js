module.exports = async function (context, req) {
  const date = "2024-09-07T00:52:39.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

