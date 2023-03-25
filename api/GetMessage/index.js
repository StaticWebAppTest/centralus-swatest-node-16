module.exports = async function (context, req) {
  const date = "2023-03-25T12:15:37.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

