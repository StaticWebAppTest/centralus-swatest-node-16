module.exports = async function (context, req) {
  const date = "2024-07-09T06:14:41.307Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

