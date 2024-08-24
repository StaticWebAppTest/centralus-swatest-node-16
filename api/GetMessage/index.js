module.exports = async function (context, req) {
  const date = "2024-08-24T19:07:32.904Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

