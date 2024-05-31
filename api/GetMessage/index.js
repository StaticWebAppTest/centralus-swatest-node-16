module.exports = async function (context, req) {
  const date = "2024-05-31T00:47:09.895Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

