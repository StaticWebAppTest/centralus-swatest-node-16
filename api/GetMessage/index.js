module.exports = async function (context, req) {
  const date = "2024-08-18T02:05:22.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

