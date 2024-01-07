module.exports = async function (context, req) {
  const date = "2024-01-07T21:08:03.278Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

