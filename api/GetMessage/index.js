module.exports = async function (context, req) {
  const date = "2024-07-18T02:33:53.663Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

