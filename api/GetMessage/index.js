module.exports = async function (context, req) {
  const date = "2024-03-03T21:08:17.569Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

