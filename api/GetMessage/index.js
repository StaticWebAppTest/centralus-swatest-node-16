module.exports = async function (context, req) {
  const date = "2024-03-31T07:08:56.458Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

