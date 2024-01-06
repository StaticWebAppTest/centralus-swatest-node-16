module.exports = async function (context, req) {
  const date = "2024-01-06T20:09:16.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

