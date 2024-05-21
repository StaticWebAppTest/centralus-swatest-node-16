module.exports = async function (context, req) {
  const date = "2024-05-21T00:44:47.948Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

