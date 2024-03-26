module.exports = async function (context, req) {
  const date = "2024-03-26T19:07:53.624Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

