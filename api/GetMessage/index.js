module.exports = async function (context, req) {
  const date = "2024-05-05T00:46:59.112Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

