module.exports = async function (context, req) {
  const date = "2024-04-12T00:42:26.462Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

