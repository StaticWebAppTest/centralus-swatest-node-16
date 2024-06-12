module.exports = async function (context, req) {
  const date = "2024-06-12T20:10:41.844Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

