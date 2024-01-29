module.exports = async function (context, req) {
  const date = "2024-01-29T16:10:31.577Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

