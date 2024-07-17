module.exports = async function (context, req) {
  const date = "2024-07-17T05:10:26.880Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

