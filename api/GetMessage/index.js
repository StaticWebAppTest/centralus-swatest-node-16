module.exports = async function (context, req) {
  const date = "2023-03-03T12:18:43.766Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

