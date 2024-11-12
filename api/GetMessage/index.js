module.exports = async function (context, req) {
  const date = "2024-11-12T05:11:41.618Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

