module.exports = async function (context, req) {
  const date = "2024-04-15T22:08:16.425Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

