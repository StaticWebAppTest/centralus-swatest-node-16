module.exports = async function (context, req) {
  const date = "2024-05-19T00:49:07.009Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

