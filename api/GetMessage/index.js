module.exports = async function (context, req) {
  const date = "2024-04-05T00:42:28.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

