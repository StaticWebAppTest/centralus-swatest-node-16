module.exports = async function (context, req) {
  const date = "2024-02-07T19:06:51.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

