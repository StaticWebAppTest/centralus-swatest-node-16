module.exports = async function (context, req) {
  const date = "2024-06-11T00:47:26.818Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

