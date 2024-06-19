module.exports = async function (context, req) {
  const date = "2024-06-19T00:47:32.988Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

