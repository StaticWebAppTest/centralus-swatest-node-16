module.exports = async function (context, req) {
  const date = "2024-12-09T05:13:20.925Z";
  let text = process.version + "  " + date;
  context.res = {
    body: {
      text: text
    },
  };
};

