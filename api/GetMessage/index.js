module.exports = async function (context, req) {
  const date = "2024-07-20T11:08:41.397Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

