module.exports = async function (context, req) {
  const date = "2024-06-27T10:10:41.944Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

