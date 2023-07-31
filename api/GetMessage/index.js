module.exports = async function (context, req) {
  const date = "2023-07-31T00:50:53.200Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

