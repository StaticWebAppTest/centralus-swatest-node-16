module.exports = async function (context, req) {
  const date = "2024-04-28T01:53:37.467Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

