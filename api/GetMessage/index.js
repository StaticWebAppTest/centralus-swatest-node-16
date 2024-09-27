module.exports = async function (context, req) {
  const date = "2024-09-27T00:56:22.042Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

