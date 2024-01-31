module.exports = async function (context, req) {
  const date = "2024-01-31T14:08:22.726Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

