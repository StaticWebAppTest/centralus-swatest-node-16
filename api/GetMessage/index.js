module.exports = async function (context, req) {
  const date = "2024-05-29T01:56:28.154Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

