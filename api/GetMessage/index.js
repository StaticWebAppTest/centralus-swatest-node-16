module.exports = async function (context, req) {
  const date = "2024-06-28T17:10:04.575Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

