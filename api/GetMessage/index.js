module.exports = async function (context, req) {
  const date = "2024-12-15T01:06:57.172Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

