module.exports = async function (context, req) {
  const date = "2025-05-29T14:13:12.856Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

