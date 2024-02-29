module.exports = async function (context, req) {
  const date = "2024-02-29T02:13:58.622Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

