module.exports = async function (context, req) {
  const date = "2024-04-01T01:54:22.636Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

