module.exports = async function (context, req) {
  const date = "2024-02-29T06:12:24.290Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

