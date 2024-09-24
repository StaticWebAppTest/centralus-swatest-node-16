module.exports = async function (context, req) {
  const date = "2024-09-24T00:56:38.834Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

