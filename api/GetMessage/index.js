module.exports = async function (context, req) {
  const date = "2023-12-19T13:11:34.219Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

