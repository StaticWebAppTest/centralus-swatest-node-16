module.exports = async function (context, req) {
  const date = "2023-11-17T10:09:39.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

