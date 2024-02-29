module.exports = async function (context, req) {
  const date = "2024-02-29T18:11:59.114Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

