module.exports = async function (context, req) {
  const date = "2024-12-25T17:09:51.858Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

