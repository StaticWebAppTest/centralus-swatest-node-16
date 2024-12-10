module.exports = async function (context, req) {
  const date = "2024-12-10T22:11:49.922Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

