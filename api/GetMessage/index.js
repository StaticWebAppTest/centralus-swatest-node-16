module.exports = async function (context, req) {
  const date = "2024-02-05T01:46:22.470Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

