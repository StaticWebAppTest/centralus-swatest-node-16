module.exports = async function (context, req) {
  const date = "2024-01-07T20:09:14.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

