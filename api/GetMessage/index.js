module.exports = async function (context, req) {
  const date = "2024-09-23T00:56:32.798Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

