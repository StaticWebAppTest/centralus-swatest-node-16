module.exports = async function (context, req) {
  const date = "2024-07-20T00:48:20.147Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

