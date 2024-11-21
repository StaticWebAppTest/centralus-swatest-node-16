module.exports = async function (context, req) {
  const date = "2024-11-21T11:10:41.620Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

