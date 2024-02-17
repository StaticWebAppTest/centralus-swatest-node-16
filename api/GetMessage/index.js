module.exports = async function (context, req) {
  const date = "2024-02-17T16:10:41.111Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

