module.exports = async function (context, req) {
  const date = "2024-02-24T13:09:28.846Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

