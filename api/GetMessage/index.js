module.exports = async function (context, req) {
  const date = "2024-02-15T20:07:41.410Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

