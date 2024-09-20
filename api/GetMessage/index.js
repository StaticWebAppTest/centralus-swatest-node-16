module.exports = async function (context, req) {
  const date = "2024-09-20T22:12:22.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

