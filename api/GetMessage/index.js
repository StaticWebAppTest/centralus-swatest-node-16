module.exports = async function (context, req) {
  const date = "2024-01-21T22:08:24.060Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

