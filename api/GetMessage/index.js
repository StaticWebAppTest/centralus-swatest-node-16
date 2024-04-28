module.exports = async function (context, req) {
  const date = "2024-04-28T00:47:09.186Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

