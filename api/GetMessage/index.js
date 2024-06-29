module.exports = async function (context, req) {
  const date = "2024-06-29T09:11:28.754Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

