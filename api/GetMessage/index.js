module.exports = async function (context, req) {
  const date = "2024-02-15T01:41:37.788Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

