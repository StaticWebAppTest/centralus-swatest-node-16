module.exports = async function (context, req) {
  const date = "2024-01-25T00:45:47.389Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

