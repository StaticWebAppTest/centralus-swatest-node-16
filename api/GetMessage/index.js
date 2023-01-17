module.exports = async function (context, req) {
  const date = "2023-01-17T00:50:39.265Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

