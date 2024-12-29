module.exports = async function (context, req) {
  const date = "2024-12-29T11:08:35.198Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

