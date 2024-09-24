module.exports = async function (context, req) {
  const date = "2024-09-24T16:14:34.351Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

