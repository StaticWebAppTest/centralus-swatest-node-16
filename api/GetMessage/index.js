module.exports = async function (context, req) {
  const date = "2024-03-19T03:10:03.643Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

