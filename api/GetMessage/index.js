module.exports = async function (context, req) {
  const date = "2024-03-14T00:40:38.161Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

