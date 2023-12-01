module.exports = async function (context, req) {
  const date = "2023-12-01T22:08:22.882Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

