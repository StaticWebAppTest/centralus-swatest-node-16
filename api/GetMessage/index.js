module.exports = async function (context, req) {
  const date = "2024-01-20T00:43:45.238Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

