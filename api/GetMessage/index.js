module.exports = async function (context, req) {
  const date = "2024-10-29T10:12:58.373Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

