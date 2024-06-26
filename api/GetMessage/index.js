module.exports = async function (context, req) {
  const date = "2024-06-26T00:47:09.345Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

