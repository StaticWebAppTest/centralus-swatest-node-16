module.exports = async function (context, req) {
  const date = "2024-09-01T04:13:48.272Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

