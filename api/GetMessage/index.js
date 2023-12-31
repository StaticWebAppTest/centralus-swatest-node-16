module.exports = async function (context, req) {
  const date = "2023-12-31T22:07:57.761Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

