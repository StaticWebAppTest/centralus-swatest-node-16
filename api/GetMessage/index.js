module.exports = async function (context, req) {
  const date = "2024-02-29T15:09:07.661Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

