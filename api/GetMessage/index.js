module.exports = async function (context, req) {
  const date = "2024-09-27T03:17:26.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

