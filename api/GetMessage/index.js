module.exports = async function (context, req) {
  const date = "2024-02-03T19:06:25.076Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

