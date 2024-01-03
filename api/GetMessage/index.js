module.exports = async function (context, req) {
  const date = "2024-01-03T00:43:18.294Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

