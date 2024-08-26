module.exports = async function (context, req) {
  const date = "2024-08-26T13:17:40.583Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

