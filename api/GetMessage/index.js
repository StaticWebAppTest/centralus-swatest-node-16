module.exports = async function (context, req) {
  const date = "2023-03-01T00:58:57.707Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

