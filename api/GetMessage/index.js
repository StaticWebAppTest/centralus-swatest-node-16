module.exports = async function (context, req) {
  const date = "2024-12-24T21:10:41.696Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

