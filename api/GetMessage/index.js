module.exports = async function (context, req) {
  const date = "2024-06-28T21:10:51.340Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

