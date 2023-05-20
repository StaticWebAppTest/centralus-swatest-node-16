module.exports = async function (context, req) {
  const date = "2023-05-20T01:58:41.540Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

