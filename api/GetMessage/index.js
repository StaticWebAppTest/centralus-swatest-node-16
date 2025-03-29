module.exports = async function (context, req) {
  const date = "2025-03-29T19:09:18.667Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

